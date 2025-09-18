import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

// Protect routes with this middleware
export const requireAuth = ClerkExpressRequireAuth();
