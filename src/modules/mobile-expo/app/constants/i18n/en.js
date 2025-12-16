export default {
  appName: "Hauswart",
  version: "Version",

  roles: {
    facilityManager: "Facility Manager",
    technician: "Technician",
    serviceProvider: "Service Provider",
    tenant: "Tenant",
  },

  onboarding: {
    skip: "Skip",
    next: "Next",
    getStarted: "Get Started",

    report: {
      title: "Report Issues Instantly",
      description:
        "Create maintenance requests in seconds with photos, videos, and clear descriptions.",
    },
    track: {
      title: "Track Progress Easily",
      description:
        "Stay updated on work orders and service requests in real time.",
    },
    manage: {
      title: "Manage Everything in One Place",
      description:
        "From reporting to resolution — everything stays organized and transparent.",
    },
  },

  roleSelect: {
    title: "Select Your Role",
    subtitle:
      "Choose how you will use the Hauswart app. Your role determines available features and access.",
    continue: "Continue",

    facilityManager: {
      title: "Facility Manager",
      description: "Oversee building operations and maintenance teams.",
      badge: "Full management access",
    },
    technician: {
      title: "Technician",
      description: "Execute work orders and report on repairs.",
      badge: "Operational access only",
    },
    serviceProvider: {
      title: "Service Provider",
      description: "Manage contracted services and vendor tasks.",
      badge: "Vendor-specific access",
    },
    tenant: {
      title: "Tenant",
      description: "View announcements and request repairs.",
      badge: "Resident-level access",
    },
  },

  login: {
    title: "Welcome Back",
    subtitle: "Sign in to access your facility dashboard.",
    email: "Email / Username",
    password: "Password",
    forgot: "Forgot Password?",
    submit: "Log In",
    noAccount: "Don't have an account?",
    register: "Register",
    secure: "Secure Enterprise Login",
  },

  register: {
    title: "Create Account",
    registeringAs: "Registering as",
    name: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    password: "Password",
    passwordHint: "Must contain at least 8 characters",
    property: "Property / Unit Code",
    propertyHint: "Found on your lease agreement or welcome packet.",
    agree: "I agree to the Terms & Conditions and Privacy Policy.",
    submit: "Create Account",
  },

  forgotPassword: {
    title: "Forgot Password",
    subtitle: "Enter your email to receive a verification code.",
    submit: "Send Code",
  },

  verifyOtp: {
    title: "Verify OTP",
    subtitle: "Enter the verification code sent to your email.",
    submit: "Verify",
  },

  resetPassword: {
    title: "Create New Password",
    subtitle: "Choose a strong password to secure your account.",
    submit: "Reset Password",
  },

  tenantDashboard: {
    issueTitle: "Something wrong?",
    issueDesc:
      "Submit a maintenance request quickly and track its progress in real time.",
    createTicket: "Create Ticket",
    myTickets: "My Tickets",
    recentUpdates: "Recent Updates",
    announcements: "Announcements",
  },

  common: {
    open: "Open",
    inProgress: "In Progress",
    completed: "Completed",
    viewAll: "View all",
  },

  tickets: {
    title: "My Tickets",
    myTickets: "My Tickets",
    history: "History",
    filterByDate: "Filter by date",
    emptyTitle: "No tickets found",
    emptyDesc: "You have no tickets yet",
  },

  ticketDetail: {
    title: "Ticket Details",
    location: "Location",
    property: "Property",
    unit: "Unit",
    area: "Area",
    description: "Description",
    attachments: "Attachments",
    progress: "Status & Progress",
    messages: "Messages",
    openChat: "Open Chat",
  },

  createTicket: {
    title: "Create Ticket",
    priorityNote: "Priority Note",
    priorityDesc:
      "Urgent issues will be prioritized by facility management based on availability and severity.",
    category: "Issue Category",
    selectCategory: "Select category",
    titleLabel: "Issue Title",
    titlePlaceholder: "Short summary of the problem",
    description: "Description",
    descPlaceholder:
      "Describe the issue in detail so maintenance can resolve it faster.",
    location: "Location Details",
    property: "Property",
    unit: "Unit",
    area: "Area",
    selectArea: "Select area (e.g. Kitchen)",
    optional: "Optional",
    attachments: "Attachments",
    attachmentsHint: "Add photos or video to help us understand the issue.",
    addPhoto: "Add Photo",
    addVideo: "Add Video",
    submit: "Submit Ticket",
  },

  chat: {
    title: "Messages",
    ticket: "Ticket",
    subtitle: "Conversation",
    emptyTitle: "No messages yet",
    emptySubtitle:
      "Messages related to your tickets will appear here.",
    placeholder: "Type your message...",
  },

  profile: {
    title: "Profile",
    account: "Account",
    preferences: "Preferences",
    support: "Support & Legal",
    edit: "Edit Profile",
    password: "Change Password",
    unit: "Unit Information",
    emergency: "Emergency Contact",
    language: "Language",
    notifications: "Notification Preferences",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    logout: "Log Out",
  },

  editProfile: {
    title: "Edit Profile",
    success: "Profile updated successfully.",
    changePhoto: "Change Photo",
    fullName: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    save: "Save Changes",
  },

  notifications: {
    title: "Notification Settings",
    options: "Notification Options",
    channels: "Notification Channels",
    ticketUpdates: "Ticket status updates",
    chatMessages: "New chat messages",
    announcements: "Announcements",
    reminders: "Reminders",
    push: "Push notifications",
    email: "Email notifications",
  },

  unit: {
    title: "Unit Information",
    details: "Unit Details",
    property: "Property Name",
    building: "Building",
    unit: "Unit / Apt",
    floor: "Floor",
    type: "Type",
    facilityManagement: "Facility Management",
    facilityManager: "Facility Manager",
    notice:
      "For changes to unit information, please contact facility management directly using the options above.",
  },

  emergency: {
    title: "Emergency Contact",
    services: "Emergency Services",
    fire: "Fire Department",
    police: "Police Department",
    medical: "Medical / Ambulance",
    propertyManagement: "Property Management",
    facilityContact: "Emergency Facility Contact",
    facilityHint: "For building-related emergencies",
    propertyManager: "Property Manager",
    notice:
      "Use these contacts for urgent situations only. For general maintenance or non-urgent repairs, please create a ticket in the Tickets tab.",
  },

  help: {
    title: "Help Center / FAQ",
    faqs: [
      {
        q: "How do I create a maintenance ticket?",
        a: "Go to the Tickets tab and tap on Create Ticket.",
      },
      {
        q: "How can I track my ticket status?",
        a: "You can view real-time status updates inside the ticket detail screen.",
      },
      {
        q: "How do I contact facility management?",
        a: "Use the Emergency Contact or Chat features inside the app.",
      },
    ],
  },

  legal: {
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
  },

  changePassword: {
    title: "Change Password",
    current: "Current Password",
    new: "New Password",
    confirm: "Confirm New Password",
    currentPlaceholder: "Enter current password",
    newPlaceholder: "Enter new password",
    confirmPlaceholder: "Re-enter new password",
    hint: "Minimum 8 characters",
    submit: "Update Password",
  },
  tabs: {
  home: "Home",
  tickets: "Tickets",
  chat: "Chat",
  alerts: "Alerts",
  profile: "Profile",
},

};
