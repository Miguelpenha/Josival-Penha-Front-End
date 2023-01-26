declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_DOMAIN: string
        NEXT_PUBLIC_API_URL: string
        NEXT_PUBLIC_API_KEY: string
        NEXT_PUBLIC_PASSWORD_FINANCE: string
        NEXT_PUBLIC_GOOGLE_CLIENT_ID: string
        NEXT_PUBLIC_GOOGLE_CLIENT_SECRET: string
        NEXT_PUBLIC_URL_DASHBOARD_GENERAL: string
        NEXT_PUBLIC_URL_DASHBOARD_FINANCE: string
        NEXT_PUBLIC_NAME_COOKIE_LOGIN_ADMIN: string
        NEXT_PUBLIC_NAME_COOKIE_LOGIN_TEACHER: string
      }
    }
}

export {}