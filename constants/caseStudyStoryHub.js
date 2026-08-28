export const CASE_STUDY_STORYHUB = {
  slug: "storyhub",

  project: {
    name: "StoryHub",
    category: "Full-Stack Blogging Platform",
    overview:
      "StoryHub is a full-stack publishing platform built to bring writing, discovery, and community interaction together in one cohesive experience. Beyond core blogging functionality, the project focuses on building a scalable and reliable product with thoughtful UX, modern architecture, and production-ready engineering practices.",
    image: "/images/projects/storyhub/Storhub_Project_Overview.webp",
  },

  sections: {
    whyIBuiltIt: {
      title: "Why I Built It",
      image: "/images/projects/storyhub/Storyhub_Why_I_Built_It.webp",
      paragraphs: [
        "I built StoryHub to go beyond individual features and understand what it takes to create a modern web application end to end.",

        "I was curious about what happens behind familiar interactions—how user-to-post and user-to-user relationships are modeled; how notifications are delivered; how authentication and authorization shape the experience; and how these systems come together to feel seamless to the user.",

        "Rather than exploring these concepts in isolation, I wanted to learn by bringing them together in a single product. StoryHub became an opportunity to move beyond basic CRUD applications and understand how the systems behind modern social and content platforms work beneath the surface.",
      ],
    },

    coreFeatures: {
      title: "Core Features",

      cards: [
        {
          title: "Content Creation & Management",
          items: [
            "Full post CRUD with ownership-aware access control",
            "Rich-text editing with Tiptap and clean slug-based post URLs",
            "Autosave to prevent data loss while writing",
            "Soft deletion for safer content management",
            "Dedicated dashboard for All, Drafts, Published, and Scheduled posts",
          ],
        },

        {
          title: "Comments & Discussions",
          items: [
            "Full comment CRUD",
            "Nested replies with recursive discussion threads",
            "Comment highlighting and automatic scroll-to-comment",
          ],
        },

        {
          title: "Authentication & Security",
          items: [
            "Secure authentication with authorization and ownership validation",
            "Protected media access using Supabase signed URLs",
          ],
        },

        {
          title: "Engagement",
          items: ["Like system for posts", "Bookmark posts for later reading"],
        },

        {
          title: "Personal Library",
          items: [
            "Dedicated library page for logged-in users",
            "Separate collections for Bookmarked and Liked posts",
          ],
        },

        {
          title: "Social Graph",
          items: [
            "Follow and unfollow users",
            "Followers and following lists",
            "Suggested users and mutual connections",
          ],
        },

        {
          title: "Discovery",
          items: ["Full-text search across users and posts"],
        },

        {
          title: "Notifications",
          items: [
            "Real-time in-app notifications using Server-Sent Events (SSE)",
            "Email notification digests for batched updates",
          ],
        },

        {
          title: "Activity Feed",
          items: [
            "Unified feed for follows, likes, comments, replies, and comment likes",
            "Aggregated high-frequency interactions for a cleaner, more efficient feed",
          ],
        },

        {
          title: "Analytics & Insights",
          items: [
            "Creator analytics dashboard with platform engagement metrics",
            "Engagement trends across views, likes, comments, and activity",
            "Audience insights to understand readership patterns",
            "Most-engaged posts for identifying top-performing content",
            "Detailed per-post analytics and performance metrics",
          ],
        },

        {
          title: "User Experience",
          items: [
            "Custom 3D page-turning loader for route transitions",
            "Smooth page transitions and polished loading states",
          ],
        },

        {
          title: "Scheduled Publishing",
          items: [
            "Schedule posts for a future date and time",
            "Quick scheduling presets and custom scheduling",
            "Reschedule or cancel posts before publication",
            "Automated publishing through a secure background process",
            "Timezone-safe scheduling across environments",
          ],
        },
      ],
    },

    technicalStack: {
      title: "Technical Stack",

      categories: [
        {
          title: "Frontend",
          items: [
            {
              name: "Next.js",
              description: "Full-stack React framework and application routing",
            },
            {
              name: "React",
              description: "Component-based UI development",
            },
          ],
        },

        {
          title: "UI & UX",
          items: [
            {
              name: "shadcn/ui",
              description: "Reusable and accessible UI components",
            },
            {
              name: "Framer Motion",
              description: "UI animations and page transitions",
            },
            {
              name: "React-Toastify",
              description: "Toast notifications and transient user feedback",
            },
            {
              name: "Tiptap",
              description: "Rich-text post editor",
            },
            {
              name: "Recharts",
              description: "Analytics charts and data visualization",
            },
            {
              name: "React Three Fiber",
              description: "3D rendering for interactive visual experiences",
            },
            {
              name: "React Three Drei",
              description: "Helpers and abstractions for Three.js scenes",
            },
            {
              name: "Lordicon",
              description: "Animated icons and interactive UI elements",
            },
          ],
        },

        {
          title: "Backend",
          items: [
            {
              name: "Next.js API Routes",
              description: "Server-side API endpoints and application logic",
            },
            {
              name: "Node.js",
              description: "Server-side JavaScript runtime",
            },
          ],
        },

        {
          title: "Authentication & Authorization",
          items: [
            {
              name: "NextAuth.js",
              description:
                "Authentication, OAuth providers, session management, and access control",
            },
          ],
        },

        {
          title: "Database",
          items: [
            {
              name: "MongoDB",
              description:
                "Primary database for users, posts, comments, social relationships, notifications, analytics, and other application data",
            },
            {
              name: "Mongoose",
              description:
                "Schema modeling, validation, and database relationships",
            },
          ],
        },

        {
          title: "Real-Time & Background Processing",
          items: [
            {
              name: "Server-Sent Events (SSE)",
              description: "Real-time in-app notifications and live updates",
            },
            {
              name: "BullMQ + Redis",
              description:
                "Background job queues, rate limiting, and email digest workflows",
            },
            {
              name: "cron-job.org",
              description: "Scheduled triggers for automated post publishing",
            },
          ],
        },

        {
          title: "Storage & Media",
          items: [
            {
              name: "Supabase Storage",
              description:
                "Media storage and secure access through signed URLs",
            },
          ],
        },

        {
          title: "Email Infrastructure",
          items: [
            {
              name: "Resend",
              description: "Production email delivery and notification emails",
            },
            {
              name: "Mailtrap",
              description: "Email testing and development",
            },
          ],
        },

        {
          title: "API Testing & Development",
          items: [
            {
              name: "Postman",
              description: "API development, testing, and endpoint validation",
            },
          ],
        },
      ],
    },

    systemArchitecture: {
      title: "System Architecture",
      image:
        "/images/projects/storyhub/StoryHub_system_architecture_diagram.webp",
      alt: "StoryHub system architecture diagram",
    },

    engineeringChallenges: {
      title: "Engineering Challenges & Decisions",

      questions: [
        {
          question:
            "Why use flattened threaded comments with inline @mentions instead of infinitely nested threads?",

          answer: [
            "I chose a flattened threaded comment model with inline @mentions instead of an infinitely nested hierarchical structure. The goal was to preserve conversational context without allowing the UI and DOM structure to grow increasingly complex with every level of nesting.",

            "Rather than recursively rendering deeply nested comment trees, replies remain within a flatter discussion structure while @mentions provide explicit context about who a reply is directed toward. This keeps discussions easier to scan and reduces frontend rendering complexity as conversations grow, while still preserving the relationship between participants and their replies.",
          ],
        },

        {
          question: "Why use Supabase Signed URLs?",

          answer: [
            "StoryHub relies heavily on user-generated media such as avatars and post cover images. I wanted to keep these assets outside the application while still using Next.js's Image component for optimized delivery. Since remote image sources need to be explicitly configured, centralizing user media in Supabase Storage gave me a predictable storage layer and a controlled image origin.",

            "I chose private Supabase buckets with signed URLs rather than exposing assets through public URLs. Private buckets keep object access protected, while signed URLs provide temporary, controlled access when an image needs to be rendered. This introduced additional complexity around generating and handling expiring URLs, but provided a reusable access-control model across StoryHub's different media buckets.",
          ],
        },

        {
          question: "Why use cron-job.org for scheduled post publishing?",

          answer: [
            "Scheduled publishing required StoryHub to periodically trigger a secure server-side endpoint that checks for posts whose scheduled time has been reached and transitions them to published.",

            "I initially considered using Vercel Cron Jobs, but the Hobby plan only supports once-daily cron execution, while StoryHub needed much finer-grained scheduling to publish posts close to their intended time.",

            "Instead of introducing a paid infrastructure dependency for this requirement, I used cron-job.org as an external scheduler to invoke the publishing endpoint at a regular interval with a secret authorization header. The endpoint then performs the database checks and publishes eligible posts.",

            "This kept the publishing logic inside StoryHub while using a lightweight external service only for scheduled triggering, giving the system the scheduling frequency it needed without unnecessarily increasing infrastructure cost.",
          ],
        },

        {
          question: "Why SSE instead of WebSockets?",

          answer: [
            "Real-time notifications were an important part of StoryHub, but the communication pattern was primarily one-way: the server needed to push events to connected clients. I considered WebSockets, but they would introduce a bidirectional communication model that StoryHub's notification system didn't actually require.",

            "I chose Server-Sent Events (SSE) because it works over standard HTTP and integrates naturally with Next.js Route Handlers through streaming responses. This allowed the application to maintain a server-to-client event stream without introducing a separate WebSocket server or additional real-time infrastructure.",

            "The browser's native EventSource API also provides built-in reconnection behavior, reducing the amount of connection-management logic I needed to implement myself.",

            "Although WebSockets are now supported on Vercel through its newer Fluid Compute/WebSocket capabilities, SSE remained the better fit for StoryHub because its notification requirements were unidirectional and didn't justify the additional complexity of a bidirectional protocol.",
          ],
        },

        {
          question:
            "Why use Redis and BullMQ for StoryHub's asynchronous email pipeline?",

          answer: [
            "StoryHub's email notification system needed to handle notification events outside the user's request-response cycle. Instead of processing email generation and delivery synchronously, I designed an asynchronous digest workflow that could collect events, batch them, and process them independently.",

            "Upstash Redis serves as the fast, short-lived data layer for this workflow. Notification events are temporarily stored and aggregated there before being grouped into email digests, while Redis also maintains the state required for email rate limiting. Its fast key-value operations, expiration capabilities, and lightweight counters made it a good fit for this high-frequency, transient data rather than storing it in MongoDB, which remains StoryHub's primary persistent data store.",

            "BullMQ provides the queue and worker layer on top of Redis. Once email processing is triggered, jobs can be queued and handled asynchronously by a worker that batches the relevant notifications into digest emails and sends them through Resend. Moving this work into a background workflow prevents email processing from delaying user-facing requests while also providing structured job handling, including retries and failure management.",

            "This created a clear separation of responsibilities: Redis manages transient digest and rate-limiting state, BullMQ manages asynchronous job processing, and Resend handles email delivery.",
          ],
        },

        {
          question:
            "How did I harden StoryHub against real-world security vulnerabilities?",

          answer: [
            "After the security audit exposed gaps across authentication, authorization, user input, file uploads, sessions, dependencies, and information exposure, StoryHub's security hardening treated these areas as interconnected parts of the application's security surface.",
          ],

          subsections: [
            {
              title: "Authorization → IDOR & ownership validation",

              paragraphs: [
                "I implemented authorization checks server-side, deriving the authenticated user's identity from the verified session rather than trusting user-supplied IDs from request parameters.",

                "For resources that belong to a user, the API verifies that the authenticated user has permission to access or modify the requested resource before performing the operation. For post-specific actions, this includes validating the relationship between the current user and the post's author/owner. Unauthorized access is rejected with an appropriate authorization response rather than allowing the requested mutation to proceed.",

                "This prevents horizontal privilege escalation/IDOR, where an authenticated user attempts to access or modify another user's resources. Depending on the endpoint, returning 403 Forbidden or 404 Not Found can also help avoid exposing whether a protected resource exists.",
              ],
            },

            {
              title: "Session Security → JWT & session hijacking",

              paragraphs: [
                "StoryHub uses NextAuth.js for authentication and JWT-based session management. Protected operations are validated server-side against the current authenticated session rather than relying solely on client-controlled identity information.",

                "I configured 8-hour maximum JWT/session lifetimes with a 1-hour session update interval, limiting the lifetime of individual session tokens while allowing active sessions to continue without unnecessary reauthentication.",

                "To handle session invalidation, I also introduced a server-side sessionVersion mechanism. The current version is associated with the user's session, and when a security-sensitive event requires session invalidation, the stored version can be changed, causing previously issued tokens with an outdated version to become invalid.",

                "Together, these controls provide protection at multiple levels: limited token lifetime, server-side session validation, and explicit invalidation of previously issued sessions, reducing the risk associated with token reuse and session hijacking.",
              ],
            },

            {
              title: "Input & File Security → SVG XSS & upload validation",

              paragraphs: [
                "The most extensive hardening was applied to user-uploaded images. I moved away from trusting client-provided file metadata and implemented defense-in-depth validation.",

                "During upload, StoryHub parses the incoming FormData, enforces a 10 MB maximum file size, uses an allowlist for supported image types (JPEG, PNG, and WebP), validates file extensions in addition to MIME information, and validates that the uploaded content can actually be processed as an image rather than trusting the declared MIME type alone.",

                "Accepted images are re-encoded as WebP before being stored in Supabase. The normalized asset uses a controlled server-generated path and filename structure.",

                "This approach helps defend against renamed executables, spoofed MIME types, malformed image payloads, and SVG-based attacks. File extension and Content-Type checks alone are insufficient because both can be manipulated; validating the actual file content and rewriting images provides an additional security boundary.",

                "For signed-URL generation, the server also validates the requested resource and authorization before generating access to the stored asset. The storage path is constrained to StoryHub's expected structure rather than allowing arbitrary user-controlled paths.",
              ],
            },

            {
              title:
                "Information Exposure → PII & internal implementation details",

              paragraphs: [
                "I reduced unnecessary information exposure from server responses and error handling.",

                "Sensitive personally identifiable information is not exposed to clients unless it is required for the feature, and protected resources are subject to the same server-side authorization checks used elsewhere in the application.",

                "I also tightened server-side input handling and error responses so that production responses do not unnecessarily reveal stack traces, database/schema details, internal implementation information, or other debugging data.",

                "The goal is to expose only the information required by the client while keeping internal application details on the server.",
              ],
            },

            {
              title: "Dependency Security → outdated & vulnerable packages",

              paragraphs: [
                "I also treated third-party dependencies as part of StoryHub's security surface. After identifying outdated or potentially vulnerable packages, I upgraded critical dependencies—most importantly Next.js—and removed or replaced dependencies that were no longer appropriate.",

                "To make dependency maintenance more consistent, I integrated Dependabot to monitor the project's dependencies and automatically raise update pull requests when newer or security-relevant versions are available. This turns dependency maintenance from a one-time cleanup into an ongoing process, while keeping updates reviewable before they are merged.",

                "This also reinforces an important supply-chain security principle: third-party dependencies need continuous monitoring, since newly discovered vulnerabilities can affect an otherwise secure application.",
              ],
            },
          ],
        },
      ],
    },

    lessonsLearned: {
      title: "Lessons Learned",

      items: [
        {
          title:
            "Feature complexity comes from interactions, not individual features",

          paragraphs: [
            "StoryHub started with seemingly independent features—posts, comments, follows, notifications, bookmarks, scheduled posts, analytics, and more. The difficult part wasn't implementing each feature individually; it was handling what happens between them.",

            "For example, a comment can trigger a notification, affect the activity feed and unread count, while pagination and real-time SSE still need to remain consistent. Scheduled posts similarly introduced interactions between post status, editor state, cron execution, and timezone handling.",
          ],

          takeaway:
            "Real lesson: designing a feature means mapping its effects across the existing system, not just building its API and UI.",
        },

        {
          title: "Background work needs its own architecture",

          paragraphs: [
            "The notification and email system taught me a different lesson from normal request-response development. Sending emails directly from an API route would couple user actions to an external service and make bursts, retries, and failures harder to manage.",

            "That led to separating event creation → Redis-backed buffering → BullMQ processing → digest/rate limiting → Resend delivery. Redis wasn't introduced simply because it was fast; it solved a specific problem: temporarily storing and controlling work that didn't need to happen during the user's request.",
          ],

          takeaway:
            "Real lesson: once work becomes asynchronous, it needs its own architecture for retries, rate limits, temporary state, and failure handling.",
        },

        {
          title:
            "Security has to be designed around data flow, not individual endpoints",

          paragraphs: [
            "The security audit changed how I looked at StoryHub. Fixing individual vulnerabilities wasn't enough because the same user-controlled data could pass through multiple layers—editor content, API input, database storage, rendering, file uploads, redirects, authentication tokens, and user-specific resources.",

            "That led to measures such as centralized HTML/plain-text sanitization, SVG upload restrictions, IDOR checks, session-version-based token invalidation, redirect validation, and reducing unnecessary exposure of user data.",
          ],

          takeaway:
            "Real lesson: security isn't a final checklist applied to routes; you have to trace where untrusted data enters, how it changes, where it is stored, and where it eventually becomes trusted or rendered.",
        },

        {
          title: "Production constraints change engineering decisions",

          paragraphs: [
            "Several StoryHub decisions only became obvious when the application had to behave outside localhost. Vercel's cron limitations pushed scheduled publishing toward an external scheduler. Differences between local and production timezones exposed assumptions in date handling. Redis command limits made me pay closer attention to background-system resource consumption. Email delivery also required moving from Mailtrap during development to Resend with domain verification in production.",
          ],

          takeaway:
            "Real lesson: an implementation that works locally isn't necessarily a production solution. Hosting limits, third-party quotas, timezone differences, external-service failures, and operational constraints have to become part of the architecture—not problems discovered after deployment.",
        },
      ],
    },

    futureRoadmap: {
      title: "Future Roadmap",

      items: [
        {
          title: "Personalized Topic Recommendations",

          description:
            "A recommendation system that helps readers discover stories based on the topics they consistently read and engage with. Instead of relying only on general popularity, StoryHub could use signals such as reading activity, likes, bookmarks, follows, and topic preferences to surface more relevant content.",
        },

        {
          title: "Real-Time User Messaging",

          description:
            "A direct messaging system that allows readers and writers to communicate privately within StoryHub. This would extend the existing social graph beyond public interactions, giving users a dedicated space for conversations, with features such as real-time messages, conversation history, and message notifications.",
        },
      ],
    },
  },
};
