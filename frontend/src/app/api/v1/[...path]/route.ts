import { NextRequest, NextResponse } from "next/server";

async function proxyToAppService(
  request: NextRequest,
  context: { params: { path: string[] } }
) {
  const baseUrl = process.env.APP_URL;
  if (!baseUrl) {
    return NextResponse.json(
      { error: "Service binding APP_URL is not configured" },
      { status: 503 }
    );
  }

  const subPath = context.params.path.join("/");
  const targetUrl = new URL(`/api/v1/${subPath}`, baseUrl);
  targetUrl.search = request.nextUrl.search;

  const headers = new Headers(request.headers);
  headers.delete("host");

  const init: RequestInit = {
    method: request.method,
    headers,
  };

  if (request.method !== "GET" && request.method !== "HEAD") {
    init.body = await request.text();
  }

  const upstreamResponse = await fetch(targetUrl, init);
  const responseBody = await upstreamResponse.arrayBuffer();

  return new NextResponse(responseBody, {
    status: upstreamResponse.status,
    headers: upstreamResponse.headers,
  });
}

export async function GET(
  request: NextRequest,
  context: { params: { path: string[] } }
) {
  return proxyToAppService(request, context);
}

export async function POST(
  request: NextRequest,
  context: { params: { path: string[] } }
) {
  return proxyToAppService(request, context);
}
