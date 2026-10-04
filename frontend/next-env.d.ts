// Ambient type declarations for Next.js and Workspace Environment

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test";
    readonly APP_URL?: string;
    readonly NEXT_PUBLIC_API_URL?: string;
    [key: string]: string | undefined;
  }
  interface Process {
    env: ProcessEnv;
  }
}

declare var process: NodeJS.Process;

declare namespace JSX {
  interface Element {}
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module "react" {
  export type ReactNode = any;
  export type FC<P = {}> = (props: P & { children?: ReactNode }) => any;
  export type CSSProperties = Record<string, any>;
  export type MouseEvent<T = any> = any;
  export type DragEvent<T = any> = any;
  export type ChangeEvent<T = any> = any;
  export interface RefObject<T> {
    current: T | null;
  }
  export function useState<T>(initialState: T | (() => T)): [T, (value: T | ((prev: T) => T)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: ReadonlyArray<any>): void;
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: ReadonlyArray<any>): T;
  export function useRef<T>(initialValue: T): { current: T };
  export function useRef<T>(initialValue: T | null): RefObject<T>;
  export function useMemo<T>(factory: () => T, deps: ReadonlyArray<any>): T;
  export const Fragment: FC<{ children?: ReactNode; key?: any }>;
  const React: {
    useState: typeof useState;
    useEffect: typeof useEffect;
    useCallback: typeof useCallback;
    useRef: typeof useRef;
    useMemo: typeof useMemo;
    Fragment: typeof Fragment;
    FC: any;
    ReactNode: any;
    MouseEvent: any;
    DragEvent: any;
    ChangeEvent: any;
    createElement: (...args: any[]) => any;
  };
  export default React;
}

declare module "next" {
  export interface Metadata {
    title?: string;
    description?: string;
    [key: string]: any;
  }
}

declare module "next/server" {
  export class NextRequest extends Request {
    nextUrl: URL;
  }
  export class NextResponse extends Response {
    static json(body: any, init?: ResponseInit): NextResponse;
  }
}

declare module "next/font/google" {
  export function Inter(options?: any): { variable: string; className: string };
}

declare module "framer-motion" {
  export const motion: {
    [key: string]: any;
  };
  export const AnimatePresence: any;
  export function useMotionValue(initial: any): any;
  export function useSpring(source: any, config?: any): any;
}

declare module "lucide-react" {
  export const Sparkles: any;
  export const Terminal: any;
  export const Activity: any;
  export const UploadCloud: any;
  export const Layers: any;
  export const ChevronDown: any;
  export const ChevronRight: any;
  export const Key: any;
  export const Link2: any;
  export const Hash: any;
  export const Type: any;
  export const Calendar: any;
  export const Mail: any;
  export const DollarSign: any;
  export const FileJson: any;
  export const Sliders: any;
  export const ShieldCheck: any;
  export const Globe: any;
  export const Play: any;
  export const Loader2: any;
  export const Cpu: any;
  export const Lock: any;
  export const CheckCircle2: any;
  export const AlertTriangle: any;
  export const Download: any;
  export const Copy: any;
  export const Check: any;
  export const ArrowRight: any;
  export const FileSpreadsheet: any;
  export const FileCode: any;
  export const Database: any;
  export const Search: any;
  export const Filter: any;
  export const RefreshCw: any;
  export const Eye: any;
  export const Plus: any;
  export const Trash2: any;
  export const Zap: any;
}

declare module "tailwindcss" {
  export interface Config {
    content: string[];
    theme?: Record<string, any>;
    plugins?: any[];
    [key: string]: any;
  }
}
