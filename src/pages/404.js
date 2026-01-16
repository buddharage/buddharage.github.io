import * as React from "react"
import { Link } from "gatsby"

import Seo from "../components/seo"

const NotFoundPage = () => (
  <main className="min-h-screen flex items-center justify-center px-6 py-12">
    <div className="text-center">
      <Seo title="404: Not found" />
      <p className="text-sm text-sand-500 mb-4">404</p>
      <h1 className="text-display-sm font-semibold text-ink tracking-tight mb-4">
        Page not found
      </h1>
      <p className="text-ink-muted mb-8 max-w-sm mx-auto">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-ink-muted hover:text-ink transition-colors duration-300"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to home
      </Link>
    </div>
  </main>
)

export default NotFoundPage
