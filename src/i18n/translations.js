// PURE JAVASCRIPT VERSION — NO TYPESCRIPT, NO INTERFACES

export const t = {
  EN: {
    appName: "Hauswart",
    footer_allRights: "All rights reserved.",

    superAdmin: "Super Admin",
    dashboard: "Dashboard",
    search: "Global search…",

    jobs: "Jobs & Tasks",
    jobsHistory: "Timeline / History",
    maintenance: "Maintenance schedules",
    timeTracking: "Time Tracking",
    gps: "GPS Logs",
    documents: "Documents",
    notifications: "Notifications",
    chat: "Messaging / Chat",
    settings: "System Settings",
    logout: "Logout",
    profile: "Profile",
    backups: "Backups",
    auditLogs: "Audit Logs",
    billing: "Billing",

    splash_wait: "Please wait…",
    splash_skip: "Skip",

    onb_tagline: "Facility Management Reimagined",
    onb_skip: "Skip",
    onb_next: "Next",
    onb_getStarted: "Get started",

    onb_slide1_title: "Smart Facility Oversight",
    onb_slide1_body:
      "Track tickets, assets, and maintenance from a single dashboard.",
    onb_slide1_b1: "Centralized ticketing across all properties",
    onb_slide1_b2: "Instant view of open tasks and SLAs",

    onb_slide2_title: "Empower Your Team",
    onb_slide2_body:
      "Give caretakers, service providers, and tenants a modern experience.",
    onb_slide2_b1: "Role-based interfaces",
    onb_slide2_b2: "Modern SaaS UI",

    onb_slide3_title: "Real-Time Transparency",
    onb_slide3_body:
      "Monitor progress and communication in real time.",
    onb_slide3_b1: "Live updates from technicians",
    onb_slide3_b2: "Analytics-ready data",

    auth_email: "Email address",
    auth_email_placeholder: "Enter your email",
    auth_password: "Password",
    auth_password_placeholder: "Enter your password",
    auth_confirmPassword: "Confirm password",
    auth_confirmPassword_placeholder: "Re-enter your password",
    auth_fullName: "Full name",
    auth_fullName_placeholder: "John Doe",
    auth_phone: "Phone number",
    auth_phone_placeholder: "+1 (555) 000-0000",

    auth_login: "Log in",
    auth_register: "Register",
    auth_forgotPassword: "Forgot password?",
    auth_backToLogin: "Back to login",

    auth_noAccount: "Don’t have an account? Register",
    auth_haveAccount: "Already have an account? Login",

    login_title: "Log in to your account",
    login_subtitle: "Welcome back! Please enter your details.",
    login_invalid: "Invalid login credentials",

    register_title: "Create your account",
    register_subtitle: "Join the leading facility management platform.",

    register_role_label: "Select role",
    register_terms_prefix: "I agree to the",
    register_terms_link: "Terms & Privacy Policy",

    role_facilityManager: "Facility Manager",
    role_caretaker: "Caretaker / Technician",
    role_serviceProvider: "Service Provider",
    role_tenant: "Tenant",
    roleSelect_title: "Select your role",

    forgot_title: "Forgot your password?",
    forgot_subtitle: "Enter your email to receive a reset link.",
    forgot_invalidEmail: "Enter a valid email",
    forgot_cta: "Reset password",

    otp_title: "Verify your account",
    otp_subtitle: "Enter the 6-digit verification code.",
    otp_invalid: "Enter a valid 6-digit code",
    otp_cta: "Verify",

    reset_title: "Set your new password",
    reset_subtitle: "Enter and confirm your password.",
    reset_newPwd: "New password",
    reset_newPwd_placeholder: "Enter new password",
    reset_confirmPwd: "Confirm password",
    reset_confirmPwd_placeholder: "Re-enter password",
    reset_tooShort: "Minimum 6 characters",
    reset_mismatch: "Passwords do not match",
    reset_cta: "Save new password",

    dash_title: "Super Admin Dashboard",
    dash_breadcrumb_home: "Home",
    dash_breadcrumb_current: "Dashboard",

    dash_card_orgs: "Total organizations",
    dash_card_properties: "Active properties",
    dash_card_openTickets: "Open tickets (global)",
    dash_card_activeUsers: "Active users",
    dash_card_activeUsers_sub: "(FM / Caretaker / SP)",
    dash_chart_tickets: "Ticket Trend",
dash_chart_users: "User Role Distribution",
dash_alerts: "System Alerts",
dash_alert_billing: "Upcoming billing cycle requires attention.",
dash_alert_sla: "Several tickets have breached SLA deadlines.",
dash_alert_docs: "Some compliance documents will expire soon.",

dash_table_tickets: "Recent Tickets",
dash_table_orgs: "Latest Organizations",

tkt_id: "Ticket ID",
tkt_user: "User",
tkt_org: "Organization",
tkt_date: "Date",

org_name: "Organization",
org_email: "Email",
org_plan: "Plan",
org_created: "Created At",
dash_ticketTrend: "Ticket Trend",
dash_maintenanceRate: "Maintenance Completion Rate",

// Alerts (Dashboard)
dash_alert_subRenew_desc: "Your subscription will renew soon.",
dash_alert_failedPay_desc: "A recent payment attempt has failed.",
dash_alert_apiSpike_desc: "Unusual API activity detected.",

// Section titles
section_recent_activity: "Recent Activity",

// Activity texts
activity_ticket_updated: "A ticket was updated.",
activity_just_now: "Just now",
activity_org_created: "A new organization was created.",
activity_15min: "15 minutes ago",
activity_sync_done: "System data sync completed.",
activity_1h: "1 hour ago",
organizations:"Organization",
createOrganization: "Create Organizations",

//property
properties: "Properties",
createProperty: "Create Property",

// PROPERTY MODULE
properties: "Properties",
properties_subtitle: "Manage all properties across all organizations.",
createProperty: "Add Property",
createPropertySubtitle: "Enter property details, structure, and personnel.",
backToProperties: "Back to Properties",

// Filters
filter_org: "Organization",
filter_propertyType: "Property Type",
filter_assignedFM: "Assigned FM",
filter_status: "Status",
searchProperty: "Search Property",
searchPropertyPlaceholder: "Search by property name...",

// Table columns
col_propertyName: "Property Name",
col_organization: "Organization",
col_type: "Type",
col_floorsUnits: "Floors / Units",
col_facilityManager: "Facility Manager",
col_status: "Status",
col_createdDate: "Created Date",
col_actions: "Actions",

// Types
type_residential: "Residential",
type_commercial: "Commercial",
type_industrial: "Industrial",
type_mixed: "Mixed Use",

// Common labels
label_floors: "Floors",
label_units: "Units",
status_active: "Active",
status_archived: "Archived",
noProperties: "No properties found.",

// Create Form
section_propertyInfo: "Property Information",
section_propertyInfo_sub: "Provide essential details about the property.",
section_building: "Building Structure",
section_personnel: "Assign Personnel",
section_documents: "Property Documents",

field_propertyName: "Property Name",
placeholder_propertyName: "Enter property name",

field_propertyType: "Property Type",
placeholder_propertyType: "Select property type",

field_address: "Street Address",
placeholder_address: "Enter full address",

field_city: "Region / City",
placeholder_city: "Select city",

field_postal: "Postal Code / ZIP",
placeholder_postal: "Enter postal code",

field_latitude: "GPS Latitude",
placeholder_latitude: "Enter latitude",

field_longitude: "GPS Longitude",
placeholder_longitude: "Enter longitude",

field_propertySize: "Property Size",
placeholder_propertySize: "e.g., 50000 sq ft",

field_description: "Description / Notes",
placeholder_description: "Add notes or details...",

field_floors: "Number of Floors",
field_units: "Total Units",
field_sections: "Building Sections (Optional)",
field_utilities: "Utility Areas (Optional)",

building_note: "Detailed floors and units can be configured after property creation.",

field_facilityManager: "Facility Manager",
placeholder_selectFM: "Select a manager",

field_caretakers: "Caretakers",
placeholder_selectCaretakers: "Select caretakers...",

field_serviceProviders: "Service Providers",
placeholder_selectProviders: "Select providers...",

field_securityTeam: "Security / Access Control Team",
placeholder_selectSecurity: "Select a team",

field_notes: "Additional Notes",
placeholder_notes: "Write notes...",

optional: "Optional",

uploadFile: "Upload a file",
orDragDrop: "or drag and drop",
fileLimit: "PDF, Images, Word up to 25MB",

cancel: "Cancel",
saveProperty: "Save Property",

  tab_overview: "Overview",
  tab_details: "Details",
  tab_structure: "Structure",
  tab_assets: "Assets",
  tab_maintenance: "Maintenance",
  tab_tickets: "Tickets",
  tab_documents: "Documents",
  tab_staff: "Assigned Staff",
  tab_gpsLogs: "GPS Logs",
  tab_activity: "Activity Logs",

  label_propertyId: "Property ID",
  label_organization: "Organization",
  label_floors: "Floors",
  label_units: "Units",

  action_edit: "Edit",
  action_archive: "Archive",
  action_delete: "Delete",
  action_cancel: "Cancel",

  modal_archive_title: "Archive Property?",
  modal_archive_description: "Archiving this property will restrict all operational workflows and hide it from active listings. You can restore it anytime.",
  modal_archive_confirm: "Archive Property",


// PROPERTY OVERVIEW TEXTS
prop_overview_summary: "Summary",
prop_overview_organization: "Organization",
prop_overview_type: "Property Type",
prop_overview_floors_units: "Floors / Units",
prop_overview_manager: "Facility Manager",
prop_overview_updated: "Last Updated",

prop_overview_gps: "GPS Coordinates",
prop_overview_openTickets: "Open Tickets",
prop_overview_upcomingMaintenance: "Upcoming Maintenance",
prop_overview_staff: "Assigned Staff",
prop_overview_lastActivity: "Last Activity",

prop_overview_active: "Active",
prop_overview_members: "Members",
prop_overview_scheduled: "Scheduled",
prop_overview_activeTickets: "Active",


prop_details_basicInfo: "Basic Information",
prop_details_edit: "Edit",

prop_details_propertyName: "Property Name",
prop_details_propertyType: "Property Type",
prop_details_propertySize: "Property Size",
prop_details_description: "Description",

prop_details_address: "Address",
prop_details_regionCity: "Region / City",
prop_details_zip: "Zip / Postal Code",
prop_details_gps: "GPS Coordinates",

prop_details_buildingStructure: "Building Structure",
prop_details_numberFloors: "Number of Floors",
prop_details_totalUnits: "Total Units",
prop_details_sections: "Building Sections",
prop_details_utilities: "Utility Areas",
prop_details_basementParking: "Basement / Parking Count",
prop_details_rooftopAccess: "Rooftop Access Info",
prop_details_yearConstruction: "Year of Construction",
prop_details_fireZone: "Fire Safety Zone",
prop_details_manageStructure: "Manage full structure →",

prop_details_assignedPersonnel: "Assigned Personnel",
prop_details_goToAssignedStaff: "Go to Assigned Staff tab →",
prop_details_manageAssignments: "Manage Assignments →",

prop_details_compliance: "Compliance & Legal Information",
prop_details_valid: "Valid",
prop_details_upcoming: "Upcoming",
prop_details_registered: "Registered",
prop_details_active: "Active",
prop_details_expires: "Expires:",
prop_details_lastService: "Last service:",
prop_details_renewal: "Renewal:",
prop_details_manageDocuments: "Manage Documents →",

prop_details_systemMetadata: "System Metadata",
prop_details_createdBy: "Created By",
prop_details_lastUpdatedBy: "Last Updated By",
prop_details_lastActivity: "Last Activity",
prop_details_propertyId: "Property ID",
prop_details_createdOn: "Created On",
prop_details_updatedOn: "Last Updated On",
prop_details_organizationId: "Organization ID",

prop_details_internalNotes: "Internal Notes",
prop_details_addNote: "Add Note",
prop_details_lastNoteBy: "Last note by",
modal_delete_description: "Deleting this property will permanently remove all associated data. This action cannot be undone.",

  // STRUCTURE TAB
  prop_structure_title: "Structure",
  prop_structure_floors: "Floors",
  prop_structure_addFloor: "Add Floor",
  prop_structure_units: "Units",
  prop_structure_addUnit: "Add Unit",
  prop_structure_manageFloors: "Manage Floors",
  prop_structure_bulkAdd: "Bulk Add Units",
  prop_structure_downloadDiagram: "Download Structure Diagram",
  prop_structure_fullHierarchy: "View Full Hierarchy",

  // FLOOR ITEM
  prop_floor_label: "Floor",
  prop_floor_ground: "Ground Floor",

  // UNIT CARD
  prop_unit_assignedTenant: "Assigned Tenant",
  prop_unit_noTenant: "No Tenant",
  prop_unit_noCaretakers: "No Caretakers",
  prop_unit_caretakers: "Caretakers",
  prop_unit_rooms: "Rooms",
  
  // BADGES
  prop_badge_residential: "Residential",
  prop_badge_office: "Office",
  prop_badge_storage: "Storage",
  prop_badge_active: "Active",
  prop_badge_vacant: "Vacant",
  prop_badge_maintenance: "Maintenance Needed",

  // ACTIONS
  action_view: "View",
  action_edit: "Edit",
  action_delete: "Delete",

    // FLOOR MODALS
    floor_add_title: "Add Floor",
    floor_add_subtitle: "Create a new floor for this property.",
    floor_field_name: "Floor Name",
    floor_placeholder_name: "Enter floor name...",
    floor_add_action: "Create Floor",

    floor_edit_title: "Edit Floor",
    floor_edit_subtitle: "Update the floor name.",
    floor_edit_action: "Save Floor",

    // UNIT MODALS (EXTRAS NOT IN YOUR FILE)
    unit_field_id: "Unit ID",
    unit_placeholder_id: "Enter unit ID...",
    unit_field_category: "Category",
    unit_field_usage: "Usage Type",
    unit_field_status_label: "Status",
    unit_placeholder_status: "Select status",

    // UNIT STATUS OPTIONS
    unit_status_active: "Active",
    unit_status_vacant: "Vacant",
    unit_status_maintenance: "Needs Maintenance",

    // UNIT TYPES (EXACT UI TERMS)
    unit_type_residential: "Residential Unit",
    unit_type_office: "Office Unit",
    unit_type_storage: "Storage Unit",

    // MODAL GENERIC
    modal_close: "Close",
    modal_save: "Save",
    modal_update: "Update",

prop_assets_search_placeholder: "Search assets...",
prop_assets_filter_category: "Asset Category",
prop_assets_filter_status: "Status",
prop_assets_addAsset: "Add Asset",

prop_assets_col_name: "Asset Name",
prop_assets_col_category: "Category",
prop_assets_col_unit: "Unit",
prop_assets_col_serial: "Serial Number",
prop_assets_col_status: "Status",

prop_asset_status_active: "Active",
prop_asset_status_under_maintenance: "Under Maintenance",
prop_asset_status_out_of_service: "Out of Service",

prop_asset_unitFloor: "Unit & Floor",
prop_asset_serial: "Serial Number",
prop_asset_lastMaintenance: "Last Maintenance",
prop_asset_nextMaintenance: "Next Maintenance Due",

prop_asset_openFullDetails: "Open Full Asset Details",
prop_asset_assignMaintenance: "Assign Maintenance",

prop_asset_add_title: "Add Asset to Unit",
prop_asset_add_sub: "Register a new asset and define metadata.",
prop_asset_label_name: "Asset Name",
prop_asset_placeholder_name: "Enter asset name",
prop_asset_label_category: "Asset Category",
prop_asset_placeholder_category: "Select category",
prop_asset_label_serial: "Serial Number (optional)",
prop_asset_placeholder_serial: "Enter serial number",
prop_asset_add_cta: "Add Asset",

prop_asset_edit_title: "Edit Asset",
prop_asset_edit_sub: "Modify asset details and review settings.",
prop_asset_edit_cta: "Save Changes",


// ===== ASSET DETAIL PAGE =====
prop_assetDetail_back: "Back to Assets",
prop_assetDetail_status_active: "Active",
prop_assetDetail_status_inactive: "Inactive",
prop_assetDetail_delete: "Delete Asset",
prop_assetDetail_more: "More",
prop_assetDetail_edit: "Edit Asset",

// More Menu
prop_assetDetail_downloadPDF: "Download Asset Report (PDF)",
prop_assetDetail_exportHistory: "Export History",
prop_assetDetail_assignMaintenance: "Assign Maintenance",

// Header Badge Info
prop_assetDetail_unit: "Unit",
prop_assetDetail_floor: "Floor",
prop_assetDetail_placement: "Placement",
prop_assetDetail_serialModel: "Serial / Model",
prop_assetDetail_vendor: "Vendor / Supplier",

// Warranty & Lifecycle
prop_assetWarranty_title: "Warranty & Lifecycle",
prop_assetWarranty_purchaseDate: "Purchase Date",
prop_assetWarranty_installationDate: "Installation Date",
prop_assetWarranty_expectedLifetime: "Expected Lifetime",
prop_assetWarranty_vendor: "Vendor / Supplier",
prop_assetWarranty_expiry: "Warranty Expiry",
prop_assetWarranty_expiresSoon: "Expires Soon",
prop_assetWarranty_lastUpdated: "Last Updated",

// Maintenance Overview
prop_assetMaintenance_title: "Maintenance Overview",
prop_assetMaintenance_viewLogs: "View Maintenance Logs",
prop_assetMaintenance_frequency: "Maintenance Frequency",
prop_assetMaintenance_status: "Maintenance Status",
prop_assetMaintenance_onSchedule: "On Schedule",
prop_assetMaintenance_nextScheduled: "Next Scheduled Maintenance",
prop_assetMaintenance_lastCompleted: "Last Maintenance Completed",
prop_assetMaintenance_assignedTechs: "Assigned Technicians",

// Documents & Media
prop_assetDocs_title: "Documents & Media",
prop_assetDocs_uploadDrag: "Upload files or drag documents here",
prop_assetDocs_uploadBtn: "Upload Document",
prop_assetDocs_view: "View",
prop_assetDocs_download: "Download",
prop_assetDocs_delete: "Delete",

// Service History
prop_assetHistory_title: "Service History",
prop_assetHistory_maintenanceCompleted: "Maintenance Completed",
prop_assetHistory_issueReported: "Issue Reported",
prop_assetHistory_assetInstalled: "Asset Installed",
prop_assetHistory_performedBy: "Performed by",

// Quick Actions
prop_assetQuick_title: "Quick Actions",
prop_assetQuick_ticket: "Create Ticket for This Asset",
prop_assetQuick_assignTask: "Assign Maintenance Task",
prop_assetQuick_addDocument: "Add Document",
prop_assetQuick_markOutOfService: "Mark as Out of Service",

// Assigned Staff
prop_assetStaff_title: "Assigned Staff",
prop_assetStaff_remove: "Remove",

// Unit Context
prop_assetContext_title: "Unit Context",
prop_assetContext_unit: "Unit",
prop_assetContext_floor: "Floor",
prop_assetContext_property: "Property",


  prop_assign_title: "Assign Maintenance Task",
  prop_assign_subtitle: "Set task details, select technicians, and schedule maintenance.",
  prop_assign_technicians: "Assigned Technicians",
  
  prop_assign_priority: "Task Priority",
  prop_assign_priority_low: "Low",
  prop_assign_priority_medium: "Medium",
  prop_assign_priority_high: "High",
  prop_assign_priority_urgent: "Urgent",

  prop_assign_scheduleDate: "Scheduled Date",

  prop_assign_frequency: "Maintenance Frequency",
  prop_assign_select: "Select option",
  prop_assign_freq_oneTime: "One-Time",
  prop_assign_freq_weekly: "Weekly",
  prop_assign_freq_monthly: "Monthly",
  prop_assign_freq_quarterly: "Quarterly",
  prop_assign_freq_yearly: "Yearly",

  prop_assign_notes: "Additional Notes",
  prop_assign_notes_placeholder: "Enter notes or special instructions",

  prop_assign_context: "Task Context",
  prop_assign_unit: "Unit",
  prop_assign_floor: "Floor",
  prop_assign_property: "Property",

  prop_assign_submit: "Assign Task",
prop_deleteAsset_title: "Delete Asset",
  prop_deleteAsset_description: "Are you sure you want to permanently delete this asset? This action cannot be undone.",
  prop_deleteAsset_warning: "Deleting this asset will remove all related maintenance logs, documents, and history.",
  prop_deleteAsset_confirm: "Delete Asset",


prop_asset_docs_title: "Documents & Media",
  prop_asset_docs_uploadText: "Upload files or drag documents here",
  prop_asset_docs_uploadButton: "Upload Document",

prop_asset_history_title: "Service History",
  prop_asset_history_maintenanceCompleted: "Maintenance Completed",
  prop_asset_history_issueReported: "Issue Reported",
  prop_asset_history_installed: "Asset Installed",

  prop_asset_history_desc_maintenance1: "Routine quarterly check. Cleaned filters, checked refrigerant levels.",
  prop_asset_history_desc_issue1: "Unit making a rattling sound. Technician dispatched.",
  prop_asset_history_desc_install1: "New HVAC unit installed by certified technician.",

  prop_asset_history_performedBy: "Performed by:",
  prop_asset_history_ticket: "Ticket",


maint_summary_totalTasks: "Total Maintenance Tasks",
maint_summary_preventive: "Preventive Tasks",
maint_summary_corrective: "Corrective Tasks",
maint_summary_overdue: "Overdue Tasks",

maint_upcoming_title: "Upcoming Maintenance",
maint_viewCalendar: "View Calendar",

maint_tasks_title: "Maintenance Tasks",
maint_createTask: "Create Maintenance Task",

maint_col_task: "Task",
maint_col_asset: "Asset",
maint_col_frequency: "Frequency",
maint_col_nextDue: "Next Due",
maint_col_status: "Status",
maint_col_assigned: "Assigned To",

maint_status_upcoming: "Upcoming",
maint_status_pending: "Pending",
maint_status_overdue: "Overdue",

maint_drawer_title: "Maintenance Task Details",
maint_field_taskName: "Task Name",
maint_field_asset: "Asset",
maint_field_frequency: "Frequency",
maint_field_nextDue: "Next Due Date",
maint_field_status: "Status",
maint_field_assignedTo: "Assigned To",
maint_field_description: "Description",
maint_noDescription: "No description provided.",
maint_action_editTask: "Edit Task",

maint_create_title: "Create Maintenance Task",
maint_placeholder_taskName: "Enter task name",
maint_placeholder_description: "Write description...",
maint_action_create: "Create Task",

maint_calendar_title: "Maintenance Calendar",

maint_assign_title: "Assign Maintenance",
maint_assign_asset: "Selected Asset",
maint_assign_task: "Select Task Template",
maint_assign_button: "Assign Maintenance",

maint_noTechnicians: "No technicians assigned",
maint_assignTechnician: "Assign Technician",
maint_assign: "Assign",
maint_remove: "Remove",

gps_map_title: "Technician GPS Tracking",
gps_map_placeholder: "Map will load here…",
gps_search_technician: "Search technician...",

gps_filter_status: "Filter by Status",

gps_col_technician: "Technician",
gps_col_role: "Role",
gps_col_status: "Status",
gps_col_lastUpdate: "Last Update",

gps_status_online: "Online",
gps_status_offline: "Offline",
gps_status_onTask: "On Task",

gps_drawer_title: "Technician Details",
gps_drawer_status: "Current Status",
gps_drawer_lastUpdate: "Last GPS Update",
gps_drawer_coordinates: "Coordinates",

docs_of: "of",
col_actions: "Actions",

prop_staff_title: "Technician Staff",
prop_staff_assign: "Assign Technician",
prop_staff_search: "Search technician...",
prop_staff_assignedFloors: "Assigned Floors",

common_active: "Active",
common_inactive: "Inactive",

  struct_floors: "Floors",
  struct_add_floor: "Add Floor",
  struct_units: "Units",

  struct_add_unit: "Add Unit",
  struct_assigned_tenant: "Assigned Tenant",
  struct_unassigned: "Unassigned",
  struct_no_tenant: "No Tenant",
  struct_caretakers: "Caretakers",
  struct_no_caretakers: "No Caretakers",

  struct_manage_floors: "Manage Floors",
  struct_bulk_units: "Bulk Add Units",
  struct_download_diagram: "Download Structure Diagram",
  struct_view_hierarchy: "View Full Hierarchy",

  // Status tags
  struct_status_active: "Active",
  struct_status_vacant: "Vacant",
  struct_status_maintenance: "Maintenance Needed",

floor_add_title: "Add Floor",
  floor_add_subtitle: "Create a new floor and define its basic structure.",

  floor_field_name: "Floor Name / Number",
  floor_placeholder_name: "e.g. Ground Floor",

  floor_field_label: "Floor Label (Optional)",
  floor_placeholder_label: "e.g. West Wing",

  floor_field_units: "Number of Units on This Floor",
  floor_units_hint: "You can add units individually after creating the floor.",

  floor_field_notes: "Additional Notes (Optional)",
  floor_placeholder_notes: "Enter any relevant notes here...",

  floor_info_text:
    "Floor details can be edited later. You can also add individual units after creating the floor.",

  floor_btn_add: "Add Floor",
  btn_cancel: "Cancel",



  /* ---------------------- */
  /* FLOOR – ADD FLOOR MODAL */
  /* ---------------------- */
  floor_add_title: "Add Floor",
  floor_add_subtitle: "Create a new floor and define its basic structure.",

  floor_field_name: "Floor Name / Number",
  floor_field_label: "Floor Label (Optional)",
  floor_field_units: "Number of Units on This Floor",
  floor_field_notes: "Additional Notes (Optional)",

  floor_placeholder_name: "e.g. Ground Floor",
  floor_placeholder_label: "e.g. West Wing",
  floor_placeholder_notes: "Enter any relevant notes here...",

  floor_units_hint: "You can add units individually after creating the floor.",
  floor_info_text:
    "Floor details can be edited later. You can also add individual units after creating the floor.",

  floor_btn_add: "Add Floor",

  /* ---------------------- */
  /* FLOOR – EDIT FLOOR MODAL */
  /* ---------------------- */
  floor_edit_title: "Edit Floor",
  floor_edit_subtitle: "Modify floor details and manage units on this level.",

  floor_units_title: "Units on This Floor",
  floor_units_subtitle: "Rename units, reorder them, or remove them.",

  floor_units_addUnit: "Add Unit",
  floor_units_deleteWarning: "Delete this unit? This action cannot be undone.",

  /* ---------------------- */
  /* UNIT DETAILS */
  /* ---------------------- */

  unit_badge_default: "Unit",
  unit_noTenant: "Unassigned",
  unit_status_active: "Active",
  unit_status_maintenance: "Maintenance",
  unit_status_vacant: "Vacant",

  /* ---------------------- */
  /* BUTTONS */
  /* ---------------------- */

  btn_cancel: "Cancel",
  btn_saveChanges: "Save Changes",
  btn_deletePermanent: "Delete Permanently",

 unit_add_title: "Add Unit",
  unit_add_subtitle: "Create a new unit under this floor and assign metadata.",

  unit_field_name: "Unit Name / Number",
  unit_field_type: "Unit Type",
  unit_field_tenant: "Assigned Tenant (optional)",
  unit_field_sqft: "Square Footage (optional)",
  unit_field_floor: "Floor Number",
  unit_field_status: "Unit Status",
  unit_field_notes: "Unit Notes (optional)",

  unit_placeholder_name: "e.g., 'Unit 301'",
  unit_placeholder_tenant: "Search tenant",
  unit_placeholder_sqft: "e.g., 1250 sq ft",
  unit_placeholder_notes: "Add any relevant remarks, e.g., 'Requires inspection'",
  unit_placeholder_staff: "Search staff...",
  unit_placeholder_room: "e.g. Kitchen",

  unit_assign_staff: "Assign Caretakers / Service Staff",
  unit_assign_staff_desc: "Assigned staff will receive tickets for this unit.",

  unit_rooms_title: "Rooms / Areas (Optional)",
  unit_rooms_desc:
    "Define rooms or functional areas in this unit for accurate maintenance routing.",

  unit_type_residential: "Residential",
  unit_type_office: "Office",
  unit_type_retail: "Retail / Shop",
  unit_type_storage: "Storage",
  unit_type_warehouse: "Warehouse",

  unit_status_active: "Active",
  unit_status_vacant: "Vacant",
  unit_status_maintenance: "Maintenance Needed",
  unit_status_renovation: "Under Renovation",

  unit_add_action: "Add Unit",
  btn_add: "Add",
  btn_cancel: "Cancel",

unit_edit_title: "Edit Unit",
  unit_edit_subtitle: "Update unit information, tenant assignment, and structural details.",

  unit_field_name: "Unit Name / Number*",
  unit_field_type: "Unit Type*",
  unit_field_sqft: "Square Footage",
  unit_field_status: "Unit Status",
  unit_field_notes: "Unit Notes",

  unit_placeholder_name: "e.g., 'Unit 301'",
  unit_placeholder_sqft: "1250 sq ft",
  unit_placeholder_notes: "Add any relevant notes here...",
  unit_placeholder_tenant: "Search tenants...",
  unit_placeholder_staff: "Add Caretakers, Technicians...",
  unit_placeholder_room: "e.g. Living Room, Storage Area",

  unit_tenant_section: "Assigned Tenant",
  unit_tenant_note: "The selected tenant will receive notifications and access to this unit.",

  unit_assign_staff: "Assigned Staff",
  unit_assign_staff_desc: "Staff here will be auto-notified for maintenance and unit-level tasks.",

  unit_rooms_title: "Rooms / Functional Areas",
  unit_rooms_desc: "Define internal sections for more accurate ticket routing and scheduling.",

  unit_type_residential: "Residential",
  unit_type_office: "Office",
  unit_type_retail: "Retail / Shop",
  unit_type_storage: "Storage",
  unit_type_warehouse: "Warehouse",
  unit_type_custom: "Custom",

  unit_status_active: "Active",
  unit_status_vacant: "Vacant",
  unit_status_maintenance: "Maintenance Needed",
  unit_status_renovation: "Under Renovation",

  unit_delete_action: "Delete Unit",
  unit_edit_action: "Save Changes",
  btn_cancel: "Cancel",
  btn_add: "Add",

struct_edit_floor: "Edit Floor",
// ADD ASSET MODAL
prop_asset_add_title: "Add Asset to Unit",
prop_asset_add_sub: "Register a new equipment item for this unit and define maintenance metadata.",

prop_asset_section_basic: "Basic Asset Information",
prop_asset_section_location: "Location Details",
prop_asset_section_warranty: "Warranty & Lifecycle",
prop_asset_section_maintenance: "Maintenance Settings",
prop_asset_section_documents: "Asset Documents & Photos",
prop_asset_section_notes: "Notes",

prop_asset_label_name: "Asset Name",
prop_asset_label_category: "Asset Category",
prop_asset_label_manufacturer: "Manufacturer (optional)",
prop_asset_label_model: "Model Number (optional)",
prop_asset_label_serial: "Serial Number (optional)",
prop_asset_label_unit: "Unit",
prop_asset_label_floor: "Floor",
prop_asset_label_position: "Placement Position (optional)",
prop_asset_label_purchase: "Purchase Date",
prop_asset_label_installation: "Installation Date",
prop_asset_label_warranty: "Warranty Expiry",
prop_asset_label_lifetime: "Expected Lifetime (optional)",
prop_asset_label_vendor: "Vendor / Supplier Name (optional)",
prop_asset_label_maintFreq: "Maintenance Frequency",
prop_asset_label_nextMaint: "Next Scheduled Maintenance",
prop_asset_label_staff: "Assign Responsible Staff",

prop_asset_label_notes: "Notes (optional)",

prop_asset_placeholder_name: "e.g., HVAC Split AC",
prop_asset_placeholder_manufacturer: "Enter manufacturer",
prop_asset_placeholder_model: "Enter model number",
prop_asset_placeholder_serial: "Enter serial number",
prop_asset_placeholder_position: "e.g., Living Room Wall",
prop_asset_placeholder_lifetime: "e.g., 5 years",
prop_asset_placeholder_vendor: "Enter name",
prop_asset_placeholder_notes: "e.g., Installed during 2023 renovation. Check for leaks quarterly.",
prop_asset_placeholder_searchStaff: "Search and add staff...",

prop_asset_add_cta: "Add Asset",



tickets: "Tickets",

ticketsDashboard: "Dashboard",
ticketsAll: "All Tickets",
ticketCreate: "Create Ticket",

tkt_dash_title: "Tickets Dashboard",
tkt_dash_subtitle: "System-wide overview of ticket activity, SLAs, and workload distribution.",

tkt_filter_org: "Organizations: All",
tkt_filter_property: "Properties: All",
tkt_filter_range: "Date Range: This Month",

tkt_kpi_total: "Total Tickets",
tkt_kpi_open: "Open Tickets",
tkt_kpi_overdue: "Overdue Tickets",
tkt_kpi_overdue_breached: "SLA Breached",
tkt_kpi_resolvedToday: "Resolved Today",
tkt_last_24h: "Last 24 hours",

tkt_vol_trend: "Ticket Volume Trend",
tkt_vol_trend_sub: "Overall ticket flow across all organizations",

tkt_by_category: "Tickets by Category",
tkt_by_category_sub: "Breakdown of tickets by service category",

tkt_sla_perf: "SLA Performance",
tkt_sla_perf_sub: "SLA compliance in current reporting period",
tkt_sla_rate: "SLA Compliance Rate",

tkt_overdue_breakdown: "Overdue Breakdown",
tkt_overdue_breakdown_sub: "Age of tickets that have breached SLA",

tkt_top_orgs: "Top 5 Tickets by Organization",
tkt_by_property: "Tickets by Property",
tkt_high_priority_only: "High Priority Only",

tkt_heatmap: "Tickets Heatmap (Time vs Day)",


tickets: "Tickets",
ticketsDashboard: "Tickets Dashboard",
allTickets: "All Tickets",
createTicket: "Create Ticket",

ticket_filters_org: "Organization",
ticket_filters_property: "Property",
ticket_filters_priority: "Priority",
ticket_filters_category: "Category",
ticket_filters_status: "Status",
ticket_filters_assigned: "Assigned To",
ticket_filters_created: "Created Date",
ticket_filters_sla: "SLA Status",
ticket_filters_clear: "Clear All",

ticket_bulk_selected: "tickets selected",
ticket_bulk_assign: "Assign Technician",
ticket_bulk_priority: "Change Priority",
ticket_bulk_status: "Update Status",
ticket_bulk_delete: "Delete",

ticket_col_id: "Ticket ID",
ticket_col_title: "Title / Summary",
ticket_col_priority: "Priority",
ticket_col_category: "Category",
ticket_col_org: "Organization",
ticket_col_property: "Property",
ticket_col_assigned: "Assigned To",
ticket_col_status: "Status",
ticket_col_created: "Created Date",
ticket_col_sla: "SLA Due",

ticket_create_header: "Create New Ticket",
ticket_create_sub: "Log a new issue and assign it to the correct team.",
ticket_back_to_all: "Back to All Tickets",

ticket_info: "Ticket Information",
ticket_location: "Location Details",
ticket_assignment: "Assignment",
ticket_attachments: "Attachments (Optional)",
ticket_description: "Description & Notes",
ticket_sla_settings: "SLA Settings (Advanced)",

ticket_title: "Ticket Title",
ticket_type: "Ticket Type",
ticket_category: "Category",
ticket_requested_by: "Requested By",
ticket_priority: "Priority",
ticket_source: "Source of Request",
ticket_desc: "Description",
ticket_internal_notes: "Internal Notes",

ticket_org: "Organization",
ticket_floor: "Floor",
ticket_property: "Property",
ticket_unit: "Unit / Room",
ticket_address: "Address",
ticket_asset: "Asset",

ticket_assign_to: "Assign To",
ticket_user_picker: "User Picker",
ticket_expected: "Expected Completion Date",
ticket_notify_user: "Notify User",

ticket_drag_drop: "Drag & drop files here or click to browse",
ticket_drag_support: "Supports: Images, PDFs, Videos",

ticket_sla_override: "Override default SLA settings?",
ticket_cancel: "Cancel",
ticket_submit: "Create Ticket",

ticket_edit: "Edit Ticket",
ticket_assign: "Assign / Reassign",
ticket_title: "Title",
ticket_priority: "Priority",
ticket_category: "Category",
ticket_type: "Ticket Type",
ticket_source: "Source",
ticket_requested_by: "Requested By",
ticket_description: "Description",
ticket_internal_notes: "Internal Notes",
ticket_timeline: "Timeline",
ticket_attachments: "Attachments",
ticket_chat: "Ticket Chat",
ticket_related: "Related Tickets",
ticket_type_message: "Type a message...",
ticket_close: "Close Ticket",
ticket_mark_completed: "Mark as Completed",
add_internal_note: "Add Internal Note",
back_to_tickets: "Back to Tickets",

assign_title: "Assign Ticket",
assign_desc: "Select a role and user to assign this ticket.",
assign_role: "Assign To Role",
expected_date: "Expected Completion Date",
available_users: "Available Users",
assigned_to: "Assigned to",
tasks_today: "Tasks today",
assignment_note: "Assignment Note (Optional)",
assignment_note_placeholder: "Add a note for the assignee...",
cancel: "Cancel",
assign_btn: "Assign Ticket",
upload: "Upload",

// ========== UPDATE STATUS ==========
  ticket_status_title: "Update Ticket Status",
  ticket_status_sub: "Change the workflow stage and optionally add a note for this action.",
  ticket_status_current: "Current Status",
  ticket_status_new: "New Status",
  ticket_status_choose: "Select new status",
  ticket_status_rule_preview: "Rule preview: Attachments are recommended before completing.",
  ticket_status_note: "Status Change Note (Optional)",
  ticket_status_note_ph: "Add a reason for this status update...",
  ticket_status_note_info: "This note will be visible in the ticket timeline.",
  ticket_status_attach_advice: "Consider adding completion photos or documents to verify the work done.",
  ticket_status_upload_btn: "Upload Attachments",
  ticket_status_close_warn1: "Closing a ticket is irreversible.",
  ticket_status_close_warn2: "Once closed, the ticket cannot be reopened or modified.",
  ticket_status_close_feedback: "Require tenant feedback after closing",
  ticket_status_sla_notice: "Completing this ticket will stop the SLA timers.",
  ticket_status_submit: "Mark Completed",

  // ========== INTERNAL NOTES ==========
  ticket_notes_title: "Internal Notes",
  ticket_notes_sub: "Notes visible only to Super Admin, Facility Managers, and Admins.",
  ticket_notes_addNew: "Add a New Internal Note",
  ticket_notes_ph: "Write an internal note...",
  ticket_notes_attach: "Attach files (optional)",
  ticket_notes_tag: "Tag this note (optional)",
  ticket_notes_high: "Record as high-importance note",
  ticket_notes_info: "These notes are not visible to tenants or service providers.",
  ticket_notes_history: "Notes History",
  ticket_notes_highLabel: "High Importance",
  ticket_notes_dummy1: "Tenant reported a major leak. Maintenance assigned. Monitor closely.",
  ticket_notes_submit: "Add Note",

  // actions
  action_cancel: "Cancel",
  action_close: "Close",
ticket_notes_viewFull: "View full note",




























  },
  

  DE: {
    appName: "Hauswart",
    footer_allRights: "Alle Rechte vorbehalten.",

    superAdmin: "Superadministrator",
    dashboard: "Instrumententafel",
    search: "Globale Suche…",

    jobs: "Aufträge & Aufgaben",
    jobsHistory: "Zeitachse / Verlauf",
    maintenance: "Wartungspläne",
    timeTracking: "Zeiterfassung",
    gps: "GPS-Protokolle",
    documents: "Dokumente",
    notifications: "Benachrichtigungen",
    chat: "Nachrichten / Chat",
    settings: "Systemeinstellungen",
    logout: "Abmelden",
    profile: "Profil",
    backups: "Backups",
    auditLogs: "Audit-Logs",
    billing: "Abrechnung",

    splash_wait: "Bitte warten…",
    splash_skip: "Überspringen",

    onb_tagline: "Facility Management neu gedacht",
    onb_skip: "Überspringen",
    onb_next: "Weiter",
    onb_getStarted: "Jetzt starten",

    onb_slide1_title: "Intelligente Objektübersicht",
    onb_slide1_body:
      "Verfolge Tickets, Anlagen und Wartungen in einem Dashboard.",
    onb_slide1_b1: "Zentralisierte Ticketübersicht",
    onb_slide1_b2: "Sofortige Übersicht offener Aufgaben",

    onb_slide2_title: "Stärke dein Team",
    onb_slide2_body:
      "Gib Hauswarten, Dienstleistern und Mietern eine moderne Oberfläche.",
    onb_slide2_b1: "Rollenbasierte Benutzeroberflächen",
    onb_slide2_b2: "Modernes SaaS-Design",

    onb_slide3_title: "Transparenz in Echtzeit",
    onb_slide3_body: "Überwache Fortschritt und Kommunikation live.",
    onb_slide3_b1: "Echtzeit-Updates",
    onb_slide3_b2: "Analysefähige Daten",

    auth_email: "E-Mail Adresse",
    auth_email_placeholder: "E-Mail eingeben",
    auth_password: "Passwort",
    auth_password_placeholder: "Passwort eingeben",
    auth_confirmPassword: "Passwort bestätigen",
    auth_confirmPassword_placeholder: "Passwort erneut eingeben",
    auth_fullName: "Vollständiger Name",
    auth_fullName_placeholder: "Max Mustermann",
    auth_phone: "Telefonnummer",
    auth_phone_placeholder: "+49 170 000000",

    auth_login: "Anmelden",
    auth_register: "Registrieren",
    auth_forgotPassword: "Passwort vergessen?",
    auth_backToLogin: "Zurück zur Anmeldung",

    auth_noAccount: "Noch kein Konto? Registrieren",
    auth_haveAccount: "Bereits ein Konto? Login",

    login_title: "Im Konto anmelden",
    login_subtitle: "Willkommen zurück! Bitte gib deine Daten ein.",
    login_invalid: "Ungültige Anmeldedaten",

    register_title: "Konto erstellen",
    register_subtitle:
      "Werde Teil der führenden Facility-Management Plattform.",

    register_role_label: "Rolle auswählen",
    register_terms_prefix: "Ich stimme den",
    register_terms_link: "AGB & Datenschutz zu",

    role_facilityManager: "Facility Manager",
    role_caretaker: "Hauswart / Techniker",
    role_serviceProvider: "Dienstleister",
    role_tenant: "Mieter",
    roleSelect_title: "Wähle deine Rolle",

    forgot_title: "Passwort vergessen?",
    forgot_subtitle: "E-Mail eingeben, um Link zu erhalten.",
    forgot_invalidEmail: "Bitte gültige E-Mail eingeben",
    forgot_cta: "Passwort zurücksetzen",

    otp_title: "Konto verifizieren",
    otp_subtitle: "Gib den 6-stelligen Code ein.",
    otp_invalid: "Bitte 6-stelligen Code eingeben",
    otp_cta: "Bestätigen",

    reset_title: "Neues Passwort setzen",
    reset_subtitle: "Passwort eingeben und bestätigen.",
    reset_newPwd: "Neues Passwort",
    reset_newPwd_placeholder: "Passwort eingeben",
    reset_confirmPwd: "Passwort bestätigen",
    reset_confirmPwd_placeholder: "Passwort erneut eingeben",
    reset_tooShort: "Mindestens 6 Zeichen",
    reset_mismatch: "Passwörter stimmen nicht überein",
    reset_cta: "Speichern",

    dash_title: "Superadmin-Dashboard",
    dash_breadcrumb_home: "Start",
    dash_breadcrumb_current: "Dashboard",

    dash_card_orgs: "Organisationen gesamt",
    dash_card_properties: "Aktive Objekte",
    dash_card_openTickets: "Offene Tickets (global)",
    dash_card_activeUsers: "Aktive Nutzer",
    dash_card_activeUsers_sub: "(FM / Hauswart / Dienstleister)",
    dash_chart_tickets: "Ticketverlauf",
dash_chart_users: "Benutzerrollen-Verteilung",
dash_alerts: "Systemwarnungen",
dash_alert_billing: "Der Abrechnungszeitraum erfordert Aufmerksamkeit.",
dash_alert_sla: "Mehrere Tickets haben SLA-Fristen überschritten.",
dash_alert_docs: "Einige Compliance-Dokumente laufen bald ab.",

dash_table_tickets: "Neueste Tickets",
dash_table_orgs: "Neueste Organisationen",

tkt_id: "Ticket ID",
tkt_user: "Benutzer",
tkt_org: "Organisation",
tkt_date: "Datum",

org_name: "Organisation",
org_email: "E-Mail",
org_plan: "Plan",
org_created: "Erstellt am",
dash_ticketTrend: "Ticketverlauf",
dash_maintenanceRate: "Wartungsabschlussrate",

// Alerts (Dashboard)
dash_alert_subRenew_desc: "Ihr Abonnement wird in Kürze verlängert.",
dash_alert_failedPay_desc: "Ein kürzlicher Zahlungsversuch ist fehlgeschlagen.",
dash_alert_apiSpike_desc: "Ungewöhnliche API-Aktivität wurde erkannt.",

// Section titles
section_recent_activity: "Letzte Aktivitäten",

// Activity texts
activity_ticket_updated: "Ein Ticket wurde aktualisiert.",
activity_just_now: "Gerade eben",
activity_org_created: "Eine neue Organisation wurde erstellt.",
activity_15min: "Vor 15 Minuten",
activity_sync_done: "Systemdaten-Synchronisierung abgeschlossen.",
activity_1h: "Vor 1 Stunde",

organizations:"Organisation",
createOrganization: "Organisation erstellen",
// Property

  properties: "Objekte",
  createProperty: "Objekt erstellen",



  // PROPERTY MODULE
properties: "Objekte",
properties_subtitle: "Verwalten Sie alle Objekte über alle Organisationen hinweg.",
createProperty: "Objekt hinzufügen",
createPropertySubtitle: "Geben Sie Objektinformationen, Struktur und Personal ein.",
backToProperties: "Zurück zu Objekten",

// Filters
filter_org: "Organisation",
filter_propertyType: "Objekttyp",
filter_assignedFM: "Zugewiesener FM",
filter_status: "Status",
searchProperty: "Objekt suchen",
searchPropertyPlaceholder: "Nach Objektname suchen...",

// Table columns
col_propertyName: "Objektname",
col_organization: "Organisation",
col_type: "Typ",
col_floorsUnits: "Etagen / Einheiten",
col_facilityManager: "Facility Manager",
col_status: "Status",
col_createdDate: "Erstellt am",
col_actions: "Aktionen",

// Types
type_residential: "Wohnobjekt",
type_commercial: "Gewerbeobjekt",
type_industrial: "Industrieobjekt",
type_mixed: "Mischnutzung",

// Common labels
label_floors: "Etagen",
label_units: "Einheiten",
status_active: "Aktiv",
status_archived: "Archiviert",
noProperties: "Keine Objekte gefunden.",

// Create Form
section_propertyInfo: "Objektinformationen",
section_propertyInfo_sub: "Geben Sie die wichtigsten Informationen zum Objekt an.",
section_building: "Gebäudestruktur",
section_personnel: "Personal zuweisen",
section_documents: "Objektdokumente",

field_propertyName: "Objektname",
placeholder_propertyName: "Objektname eingeben",

field_propertyType: "Objekttyp",
placeholder_propertyType: "Objekttyp auswählen",

field_address: "Adresse",
placeholder_address: "Vollständige Adresse eingeben",

field_city: "Region / Stadt",
placeholder_city: "Stadt auswählen",

field_postal: "Postleitzahl",
placeholder_postal: "Postleitzahl eingeben",

field_latitude: "GPS Breitengrad",
placeholder_latitude: "Breitengrad eingeben",

field_longitude: "GPS Längengrad",
placeholder_longitude: "Längengrad eingeben",

field_propertySize: "Objektgröße",
placeholder_propertySize: "z.B. 50000 sq ft",

field_description: "Beschreibung / Notizen",
placeholder_description: "Notizen oder Details hinzufügen...",

field_floors: "Anzahl der Etagen",
field_units: "Gesamteinheiten",
field_sections: "Gebäudebereiche (Optional)",
field_utilities: "Nutzflächen (Optional)",

building_note: "Detaillierte Etagen und Einheiten können nach der Erstellung definiert werden.",

field_facilityManager: "Facility Manager",
placeholder_selectFM: "Manager auswählen",

field_caretakers: "Hauswarte",
placeholder_selectCaretakers: "Hauswarte auswählen...",

field_serviceProviders: "Dienstleister",
placeholder_selectProviders: "Dienstleister auswählen...",

field_securityTeam: "Sicherheits- / Zugangsteam",
placeholder_selectSecurity: "Team auswählen",

field_notes: "Zusätzliche Notizen",
placeholder_notes: "Notizen eingeben...",

optional: "Optional",

uploadFile: "Datei hochladen",
orDragDrop: "oder per Drag & Drop",
fileLimit: "PDF, Bilder, Word bis zu 25MB",

cancel: "Abbrechen",
saveProperty: "Objekt speichern",

  tab_overview: "Übersicht",
  tab_details: "Details",
  tab_structure: "Struktur",
  tab_assets: "Vermögenswerte",
  tab_maintenance: "Wartung",
  tab_tickets: "Tickets",
  tab_documents: "Dokumente",
  tab_staff: "Zugewiesenes Personal",
  tab_gpsLogs: "GPS-Protokolle",
  tab_activity: "Aktivitätsprotokolle",

  label_propertyId: "Objekt-ID",
  label_organization: "Organisation",
  label_floors: "Etagen",
  label_units: "Einheiten",

  action_edit: "Bearbeiten",
  action_archive: "Archivieren",
  action_delete: "Löschen",
  action_cancel: "Abbrechen",

  modal_archive_title: "Objekt archivieren?",
  modal_archive_description: "Durch das Archivieren dieses Objekts werden alle operativen Abläufe eingeschränkt und es wird aus aktiven Listen entfernt. Sie können es jederzeit wiederherstellen.",
  modal_archive_confirm: "Objekt archivieren",

prop_overview_summary: "Zusammenfassung",
prop_overview_organization: "Organisation",
prop_overview_type: "Objekttyp",
prop_overview_floors_units: "Etagen / Einheiten",
prop_overview_manager: "Objektmanager",
prop_overview_updated: "Zuletzt aktualisiert",

prop_overview_gps: "GPS-Koordinaten",
prop_overview_openTickets: "Offene Tickets",
prop_overview_upcomingMaintenance: "Bevorstehende Wartung",
prop_overview_staff: "Zugewiesenes Personal",
prop_overview_lastActivity: "Letzte Aktivität",

prop_overview_active: "Aktiv",
prop_overview_members: "Mitglieder",
prop_overview_scheduled: "Geplant",
prop_overview_activeTickets: "Aktiv",


prop_details_basicInfo: "Grundinformationen",
prop_details_edit: "Bearbeiten",

prop_details_propertyName: "Objektname",
prop_details_propertyType: "Objekttyp",
prop_details_propertySize: "Objektgröße",
prop_details_description: "Beschreibung",

prop_details_address: "Adresse",
prop_details_regionCity: "Region / Stadt",
prop_details_zip: "PLZ",
prop_details_gps: "GPS-Koordinaten",

prop_details_buildingStructure: "Gebäudestruktur",
prop_details_numberFloors: "Anzahl der Etagen",
prop_details_totalUnits: "Gesamteinheiten",
prop_details_sections: "Gebäudebereiche",
prop_details_utilities: "Technische Bereiche",
prop_details_basementParking: "Keller / Parkplätze",
prop_details_rooftopAccess: "Zugang zum Dach",
prop_details_yearConstruction: "Baujahr",
prop_details_fireZone: "Brandschutzzone",
prop_details_manageStructure: "Strukturverwaltung →",

prop_details_assignedPersonnel: "Zugewiesenes Personal",
prop_details_goToAssignedStaff: "Zum Personal-Tab →",
prop_details_manageAssignments: "Zuweisungen verwalten →",

prop_details_compliance: "Compliance & Rechtliche Informationen",
prop_details_valid: "Gültig",
prop_details_upcoming: "Anstehend",
prop_details_registered: "Registriert",
prop_details_active: "Aktiv",
prop_details_expires: "Gültig bis:",
prop_details_lastService: "Letzter Service:",
prop_details_renewal: "Erneuerung:",
prop_details_manageDocuments: "Dokumente verwalten →",

prop_details_systemMetadata: "Systemmetadaten",
prop_details_createdBy: "Erstellt von",
prop_details_lastUpdatedBy: "Zuletzt aktualisiert von",
prop_details_lastActivity: "Letzte Aktivität",
prop_details_propertyId: "Objekt-ID",
prop_details_createdOn: "Erstellt am",
prop_details_updatedOn: "Aktualisiert am",
prop_details_organizationId: "Organisations-ID",

prop_details_internalNotes: "Interne Notizen",
prop_details_addNote: "Notiz hinzufügen",
prop_details_lastNoteBy: "Letzte Notiz von",
modal_delete_description: "Das Löschen dieser Immobilie entfernt dauerhaft alle zugehörigen Daten. Dieser Vorgang kann nicht rückgängig gemacht werden.",

 // STRUCTURE TAB
  prop_structure_title: "Struktur",
  prop_structure_floors: "Etagen",
  prop_structure_addFloor: "Etage hinzufügen",
  prop_structure_units: "Einheiten",
  prop_structure_addUnit: "Einheit hinzufügen",
  prop_structure_manageFloors: "Etagen verwalten",
  prop_structure_bulkAdd: "Einheiten stapelweise hinzufügen",
  prop_structure_downloadDiagram: "Strukturdiagramm herunterladen",
  prop_structure_fullHierarchy: "Gesamte Hierarchie ansehen",

  // FLOOR ITEM
  prop_floor_label: "Etage",
  prop_floor_ground: "Erdgeschoss",

  // UNIT CARD
  prop_unit_assignedTenant: "Zugewiesener Mieter",
  prop_unit_noTenant: "Kein Mieter",
  prop_unit_noCaretakers: "Keine Hausmeister",
  prop_unit_caretakers: "Hausmeister",
  prop_unit_rooms: "Räume",

  // BADGES
  prop_badge_residential: "Wohnung",
  prop_badge_office: "Büro",
  prop_badge_storage: "Lager",
  prop_badge_active: "Aktiv",
  prop_badge_vacant: "Frei",
  prop_badge_maintenance: "Wartung benötigt",

  // ACTIONS
  action_view: "Ansehen",
  action_edit: "Bearbeiten",
  action_delete: "Löschen",

      // FLOOR MODALS
    floor_add_title: "Add Floor",
    floor_add_subtitle: "Create a new floor for this property.",
    floor_field_name: "Floor Name",
    floor_placeholder_name: "Enter floor name...",
    floor_add_action: "Create Floor",

    floor_edit_title: "Edit Floor",
    floor_edit_subtitle: "Update the floor name.",
    floor_edit_action: "Save Floor",

    // UNIT MODALS (EXTRAS NOT IN YOUR FILE)
    unit_field_id: "Unit ID",
    unit_placeholder_id: "Enter unit ID...",
    unit_field_category: "Category",
    unit_field_usage: "Usage Type",
    unit_field_status_label: "Status",
    unit_placeholder_status: "Select status",

    // UNIT STATUS OPTIONS
    unit_status_active: "Active",
    unit_status_vacant: "Vacant",
    unit_status_maintenance: "Needs Maintenance",

    // UNIT TYPES (EXACT UI TERMS)
    unit_type_residential: "Residential Unit",
    unit_type_office: "Office Unit",
    unit_type_storage: "Storage Unit",

    // MODAL GENERIC
    modal_close: "Close",
    modal_save: "Save",
    modal_update: "Update",



    prop_assets_search_placeholder: "Assets durchsuchen...",
prop_assets_filter_category: "Asset-Kategorie",
prop_assets_filter_status: "Status",
prop_assets_addAsset: "Asset hinzufügen",

prop_assets_col_name: "Asset-Name",
prop_assets_col_category: "Kategorie",
prop_assets_col_unit: "Einheit",
prop_assets_col_serial: "Seriennummer",
prop_assets_col_status: "Status",

prop_asset_status_active: "Aktiv",
prop_asset_status_under_maintenance: "In Wartung",
prop_asset_status_out_of_service: "Außer Betrieb",

prop_asset_unitFloor: "Einheit & Etage",
prop_asset_serial: "Seriennummer",
prop_asset_lastMaintenance: "Letzte Wartung",
prop_asset_nextMaintenance: "Nächste fällige Wartung",

prop_asset_openFullDetails: "Vollständige Assetdetails öffnen",
prop_asset_assignMaintenance: "Wartung zuweisen",

prop_asset_add_title: "Asset zur Einheit hinzufügen",
prop_asset_add_sub: "Neues Gerät registrieren und Metadaten festlegen.",
prop_asset_label_name: "Asset-Name",
prop_asset_placeholder_name: "Asset-Name eingeben",
prop_asset_label_category: "Asset-Kategorie",
prop_asset_placeholder_category: "Kategorie auswählen",
prop_asset_label_serial: "Seriennummer (optional)",
prop_asset_placeholder_serial: "Seriennummer eingeben",
prop_asset_add_cta: "Asset hinzufügen",

prop_asset_edit_title: "Asset bearbeiten",
prop_asset_edit_sub: "Assetdetails bearbeiten und Einstellungen prüfen.",
prop_asset_edit_cta: "Änderungen speichern",


// ===== ASSET DETAIL PAGE =====
prop_assetDetail_back: "Zurück zu Assets",
prop_assetDetail_status_active: "Aktiv",
prop_assetDetail_status_inactive: "Inaktiv",
prop_assetDetail_delete: "Asset löschen",
prop_assetDetail_more: "Mehr",
prop_assetDetail_edit: "Asset bearbeiten",

// More Menu
prop_assetDetail_downloadPDF: "Asset-Bericht herunterladen (PDF)",
prop_assetDetail_exportHistory: "Verlauf exportieren",
prop_assetDetail_assignMaintenance: "Wartung zuweisen",

// Header Badge Info
prop_assetDetail_unit: "Einheit",
prop_assetDetail_floor: "Etage",
prop_assetDetail_placement: "Platzierung",
prop_assetDetail_serialModel: "Seriennummer / Modell",
prop_assetDetail_vendor: "Lieferant",

// Warranty & Lifecycle
prop_assetWarranty_title: "Garantie & Lebenszyklus",
prop_assetWarranty_purchaseDate: "Kaufdatum",
prop_assetWarranty_installationDate: "Installationsdatum",
prop_assetWarranty_expectedLifetime: "Erwartete Lebensdauer",
prop_assetWarranty_vendor: "Lieferant",
prop_assetWarranty_expiry: "Garantieablauf",
prop_assetWarranty_expiresSoon: "Läuft bald ab",
prop_assetWarranty_lastUpdated: "Zuletzt aktualisiert",

// Maintenance Overview
prop_assetMaintenance_title: "Wartungsübersicht",
prop_assetMaintenance_viewLogs: "Wartungsprotokolle anzeigen",
prop_assetMaintenance_frequency: "Wartungsfrequenz",
prop_assetMaintenance_status: "Wartungsstatus",
prop_assetMaintenance_onSchedule: "Im Plan",
prop_assetMaintenance_nextScheduled: "Nächste geplante Wartung",
prop_assetMaintenance_lastCompleted: "Letzte abgeschlossene Wartung",
prop_assetMaintenance_assignedTechs: "Zugewiesene Techniker",

// Documents & Media
prop_assetDocs_title: "Dokumente & Medien",
prop_assetDocs_uploadDrag: "Dateien hochladen oder hier ablegen",
prop_assetDocs_uploadBtn: "Dokument hochladen",
prop_assetDocs_view: "Ansehen",
prop_assetDocs_download: "Herunterladen",
prop_assetDocs_delete: "Löschen",

// Service History
prop_assetHistory_title: "Serviceverlauf",
prop_assetHistory_maintenanceCompleted: "Wartung abgeschlossen",
prop_assetHistory_issueReported: "Problem gemeldet",
prop_assetHistory_assetInstalled: "Asset installiert",
prop_assetHistory_performedBy: "Durchgeführt von",

// Quick Actions
prop_assetQuick_title: "Schnellaktionen",
prop_assetQuick_ticket: "Ticket für dieses Asset erstellen",
prop_assetQuick_assignTask: "Wartungsaufgabe zuweisen",
prop_assetQuick_addDocument: "Dokument hinzufügen",
prop_assetQuick_markOutOfService: "Als außer Betrieb markieren",

// Assigned Staff
prop_assetStaff_title: "Zugewiesenes Personal",
prop_assetStaff_remove: "Entfernen",

// Unit Context
prop_assetContext_title: "Einheitskontext",
prop_assetContext_unit: "Einheit",
prop_assetContext_floor: "Etage",
prop_assetContext_property: "Objekt",


 prop_assign_title: "Wartungsaufgabe zuweisen",
  prop_assign_subtitle: "Aufgabendetails festlegen, Techniker auswählen und Wartung planen.",
  prop_assign_technicians: "Zugewiesene Techniker",

  prop_assign_priority: "Aufgabenpriorität",
  prop_assign_priority_low: "Niedrig",
  prop_assign_priority_medium: "Mittel",
  prop_assign_priority_high: "Hoch",
  prop_assign_priority_urgent: "Dringend",

  prop_assign_scheduleDate: "Geplantes Datum",

prop_assign_frequency: "Wartungsfrequenz",
  prop_assign_select: "Option wählen",
  prop_assign_freq_oneTime: "Einmalig",
  prop_assign_freq_weekly: "Wöchentlich",
  prop_assign_freq_monthly: "Monatlich",
  prop_assign_freq_quarterly: "Vierteljährlich",
  prop_assign_freq_yearly: "Jährlich",

  prop_assign_notes: "Zusätzliche Notizen",
  prop_assign_notes_placeholder: "Notizen oder besondere Anweisungen eingeben",

  prop_assign_context: "Aufgabenkontext",
  prop_assign_unit: "Einheit",
  prop_assign_floor: "Etage",
  prop_assign_property: "Objekt",

  prop_assign_submit: "Aufgabe zuweisen",

  prop_deleteAsset_title: "Asset löschen",
  prop_deleteAsset_description: "Sind Sie sicher, dass Sie dieses Asset dauerhaft löschen möchten? Dieser Vorgang kann nicht rückgängig gemacht werden.",
  prop_deleteAsset_warning: "Das Löschen dieses Assets entfernt alle zugehörigen Wartungsprotokolle, Dokumente und den Verlauf.",
  prop_deleteAsset_confirm: "Asset löschen",
 prop_asset_docs_title: "Dokumente & Medien",
  prop_asset_docs_uploadText: "Dateien hochladen oder hierher ziehen",
  prop_asset_docs_uploadButton: "Dokument hochladen",


 prop_asset_history_title: "Serviceverlauf",
  prop_asset_history_maintenanceCompleted: "Wartung abgeschlossen",
  prop_asset_history_issueReported: "Problem gemeldet",
  prop_asset_history_installed: "Asset installiert",

  prop_asset_history_desc_maintenance1: "Routinemäßige vierteljährliche Wartung. Filter gereinigt, Kältemittelstand geprüft.",
  prop_asset_history_desc_issue1: "Gerät verursacht ein Rasselgeräusch. Techniker wurde entsendet.",
  prop_asset_history_desc_install1: "Neues HVAC-Gerät von zertifiziertem Techniker installiert.",

  prop_asset_history_performedBy: "Durchgeführt von:",
  prop_asset_history_ticket: "Ticket",



maint_summary_totalTasks: "Wartungsaufgaben gesamt",
maint_summary_preventive: "Vorbeugende Aufgaben",
maint_summary_corrective: "Korrekturaufgaben",
maint_summary_overdue: "Überfällig",

maint_upcoming_title: "Bevorstehende Wartung",
maint_viewCalendar: "Kalender anzeigen",

maint_tasks_title: "Wartungsaufgaben",
maint_createTask: "Wartungsaufgabe erstellen",

maint_col_task: "Aufgabe",
maint_col_asset: "Asset",
maint_col_frequency: "Frequenz",
maint_col_nextDue: "Nächste Fälligkeit",
maint_col_status: "Status",
maint_col_assigned: "Zugewiesen an",

maint_status_upcoming: "Bevorstehend",
maint_status_pending: "Ausstehend",
maint_status_overdue: "Überfällig",


maint_drawer_title: "Wartungsaufgabe Details",
maint_field_taskName: "Aufgabenname",
maint_field_asset: "Asset",
maint_field_frequency: "Frequenz",
maint_field_nextDue: "Nächste Fälligkeit",
maint_field_status: "Status",
maint_field_assignedTo: "Zugewiesen an",
maint_field_description: "Beschreibung",
maint_noDescription: "Keine Beschreibung vorhanden.",
maint_action_editTask: "Aufgabe bearbeiten",

maint_create_title: "Wartungsaufgabe erstellen",
maint_placeholder_taskName: "Aufgabenname eingeben",
maint_placeholder_description: "Beschreibung eingeben...",
maint_action_create: "Aufgabe erstellen",

maint_calendar_title: "Wartungskalender",

maint_assign_title: "Wartung zuweisen",
maint_assign_asset: "Ausgewähltes Asset",
maint_assign_task: "Aufgabe auswählen",
maint_assign_button: "Wartung zuweisen",

maint_noTechnicians: "Keine Techniker zugewiesen",
maint_assignTechnician: "Techniker zuweisen",
maint_assign: "Zuweisen",
maint_remove: "Entfernen",


gps_map_title: "GPS-Tracking der Techniker",
gps_map_placeholder: "Die Karte wird hier geladen…",
gps_search_technician: "Techniker suchen...",

gps_filter_status: "Nach Status filtern",

gps_col_technician: "Techniker",
gps_col_role: "Rolle",
gps_col_status: "Status",
gps_col_lastUpdate: "Letzte Aktualisierung",

gps_status_online: "Online",
gps_status_offline: "Offline",
gps_status_onTask: "Im Einsatz",

gps_drawer_title: "Techniker-Details",
gps_drawer_status: "Aktueller Status",
gps_drawer_lastUpdate: "Letztes GPS-Update",
gps_drawer_coordinates: "Koordinaten",

docs_of: "von",
col_actions: "Aktionen",
prop_staff_title: "Technikerteam",
prop_staff_assign: "Techniker zuweisen",
prop_staff_search: "Techniker suchen...",
prop_staff_assignedFloors: "Zugewiesene Etagen",

common_active: "Aktiv",
common_inactive: "Inaktiv",


struct_floors: "Etagen",
  struct_add_floor: "Etage hinzufügen",
  struct_units: "Einheiten",

  struct_add_unit: "Einheit hinzufügen",
  struct_assigned_tenant: "Zugewiesener Mieter",
  struct_unassigned: "Nicht zugewiesen",
  struct_no_tenant: "Kein Mieter",
  struct_caretakers: "Hauswarte",
  struct_no_caretakers: "Keine Hauswarte",

  struct_manage_floors: "Etagen verwalten",
  struct_bulk_units: "Einheiten stapelweise hinzufügen",
  struct_download_diagram: "Strukturdiagramm herunterladen",
  struct_view_hierarchy: "Gesamte Hierarchie ansehen",

  // Status tags
  struct_status_active: "Aktiv",
  struct_status_vacant: "Leerstehend",
  struct_status_maintenance: "Wartung erforderlich",

  floor_add_title: "Etage hinzufügen",
  floor_add_subtitle: "Erstellen Sie eine neue Etage und definieren Sie deren Grundstruktur.",

  floor_field_name: "Etagenname / Nummer",
  floor_placeholder_name: "z. B. Erdgeschoss",

  floor_field_label: "Etagenbezeichnung (Optional)",
  floor_placeholder_label: "z. B. Westflügel",

  floor_field_units: "Anzahl der Einheiten auf dieser Etage",
  floor_units_hint: "Sie können Einheiten nach dem Erstellen der Etage einzeln hinzufügen.",

  floor_field_notes: "Zusätzliche Notizen (Optional)",
  floor_placeholder_notes: "Geben Sie relevante Notizen ein…",

  floor_info_text:
    "Etagenangaben können später bearbeitet werden. Sie können nachträglich auch einzelne Einheiten hinzufügen.",

  floor_btn_add: "Etage hinzufügen",
  btn_cancel: "Abbrechen",

  /* ---------------------- */
  /* FLOOR – ADD FLOOR MODAL */
  /* ---------------------- */
  floor_add_title: "Etage hinzufügen",
  floor_add_subtitle: "Erstellen Sie eine neue Etage und definieren Sie ihre Grundstruktur.",

  floor_field_name: "Etagenname / Nummer",
  floor_field_label: "Etagenbezeichnung (Optional)",
  floor_field_units: "Anzahl der Einheiten auf dieser Etage",
  floor_field_notes: "Zusätzliche Notizen (Optional)",

  floor_placeholder_name: "z. B. Erdgeschoss",
  floor_placeholder_label: "z. B. Westflügel",
  floor_placeholder_notes: "Geben Sie hier relevante Notizen ein...",

  floor_units_hint:
    "Einheiten können nach dem Erstellen der Etage einzeln hinzugefügt werden.",
  floor_info_text:
    "Etageninformationen können später bearbeitet werden. Sie können nach dem Erstellen der Etage auch einzelne Einheiten hinzufügen.",

  floor_btn_add: "Etage hinzufügen",

  /* ---------------------- */
  /* FLOOR – EDIT FLOOR MODAL */
  /* ---------------------- */
  floor_edit_title: "Etage bearbeiten",
  floor_edit_subtitle:
    "Bearbeiten Sie die Etageninformationen und verwalten Sie die Einheiten auf dieser Ebene.",

  floor_units_title: "Einheiten auf dieser Etage",
  floor_units_subtitle:
    "Benennen Sie Einheiten um, ändern Sie die Reihenfolge oder entfernen Sie sie.",

  floor_units_addUnit: "Einheit hinzufügen",
  floor_units_deleteWarning:
    "Diese Einheit löschen? Dieser Vorgang kann nicht rückgängig gemacht werden.",

  /* ---------------------- */
  /* UNIT DETAILS */
  /* ---------------------- */

  unit_badge_default: "Einheit",
  unit_noTenant: "Nicht zugewiesen",
  unit_status_active: "Aktiv",
  unit_status_maintenance: "Wartung",
  unit_status_vacant: "Leerstehend",

  /* ---------------------- */
  /* BUTTONS */
  /* ---------------------- */

  btn_cancel: "Abbrechen",
  btn_saveChanges: "Änderungen speichern",
  btn_deletePermanent: "Dauerhaft löschen",

 unit_add_title: "Einheit hinzufügen",
  unit_add_subtitle:
    "Erstellen Sie eine neue Einheit auf dieser Etage und weisen Sie Metadaten zu.",

  unit_field_name: "Einheitsname / Nummer",
  unit_field_type: "Einheitstyp",
  unit_field_tenant: "Zugewiesener Mieter (optional)",
  unit_field_sqft: "Fläche (optional)",
  unit_field_floor: "Etage",
  unit_field_status: "Status der Einheit",
  unit_field_notes: "Notizen zur Einheit (optional)",

  unit_placeholder_name: "z. B. 'Einheit 301'",
  unit_placeholder_tenant: "Mieter suchen",
  unit_placeholder_sqft: "z. B. 1250 sq ft",
  unit_placeholder_notes: "Relevante Hinweise eingeben, z. B. 'Inspektion erforderlich'",
  unit_placeholder_staff: "Mitarbeiter suchen...",
  unit_placeholder_room: "z. B. Küche",

  unit_assign_staff: "Hausmeister / Serviceteam zuweisen",
  unit_assign_staff_desc:
    "Zugewiesene Mitarbeiter erhalten Tickets für diese Einheit.",

  unit_rooms_title: "Räume / Bereiche (optional)",
  unit_rooms_desc:
    "Definieren Sie Räume oder Funktionsbereiche innerhalb dieser Einheit.",

  unit_type_residential: "Wohnung",
  unit_type_office: "Büro",
  unit_type_retail: "Einzelhandel / Shop",
  unit_type_storage: "Lagerraum",
  unit_type_warehouse: "Lagerhalle",

  unit_status_active: "Aktiv",
  unit_status_vacant: "Leerstehend",
  unit_status_maintenance: "Wartung erforderlich",
  unit_status_renovation: "In Renovierung",

  unit_add_action: "Einheit hinzufügen",
  btn_add: "Hinzufügen",
  btn_cancel: "Abbrechen",


unit_edit_title: "Einheit bearbeiten",
  unit_edit_subtitle: "Aktualisieren Sie Einheitsdaten, Mieterzuweisung und strukturelle Informationen.",

  unit_field_name: "Einheitsname / Nummer*",
  unit_field_type: "Einheitstyp*",
  unit_field_sqft: "Fläche",
  unit_field_status: "Status der Einheit",
  unit_field_notes: "Einheitsnotizen",

  unit_placeholder_name: "z. B. 'Einheit 301'",
  unit_placeholder_sqft: "1250 sq ft",
  unit_placeholder_notes: "Relevante Hinweise eingeben...",
  unit_placeholder_tenant: "Mieter suchen...",
  unit_placeholder_staff: "Hausmeister, Techniker hinzufügen...",
  unit_placeholder_room: "z. B. Wohnzimmer, Lagerbereich",

  unit_tenant_section: "Zugewiesener Mieter",
  unit_tenant_note: "Der ausgewählte Mieter erhält Benachrichtigungen und Zugriff auf diese Einheit.",

  unit_assign_staff: "Zugewiesenes Personal",
  unit_assign_staff_desc: "Dieses Personal wird automatisch über Wartungs- und Einheitentickets informiert.",

  unit_rooms_title: "Räume / Funktionsbereiche",
  unit_rooms_desc: "Definieren Sie interne Bereiche für genauere Ticketzuweisungen und Planung.",

  unit_type_residential: "Wohnung",
  unit_type_office: "Büro",
  unit_type_retail: "Einzelhandel / Shop",
  unit_type_storage: "Lagerraum",
  unit_type_warehouse: "Lagerhalle",
  unit_type_custom: "Benutzerdefiniert",

  unit_status_active: "Aktiv",
  unit_status_vacant: "Leerstehend",
  unit_status_maintenance: "Wartung erforderlich",
  unit_status_renovation: "In Renovierung",

  unit_delete_action: "Einheit löschen",
  unit_edit_action: "Änderungen speichern",
  btn_cancel: "Abbrechen",
  btn_add: "Hinzufügen",
struct_edit_floor: "Etage bearbeiten",


// ADD ASSET MODAL (GERMAN)
prop_asset_add_title: "Asset zur Einheit hinzufügen",
prop_asset_add_sub: "Registrieren Sie ein neues Gerät für diese Einheit und definieren Sie Wartungsmetadaten.",

prop_asset_section_basic: "Grundlegende Asset-Informationen",
prop_asset_section_location: "Standortdetails",
prop_asset_section_warranty: "Garantie & Lebenszyklus",
prop_asset_section_maintenance: "Wartungseinstellungen",
prop_asset_section_documents: "Asset-Dokumente & Fotos",
prop_asset_section_notes: "Notizen",

prop_asset_label_name: "Asset-Name",
prop_asset_label_category: "Asset-Kategorie",
prop_asset_label_manufacturer: "Hersteller (optional)",
prop_asset_label_model: "Modellnummer (optional)",
prop_asset_label_serial: "Seriennummer (optional)",
prop_asset_label_unit: "Einheit",
prop_asset_label_floor: "Etage",
prop_asset_label_position: "Platzierungsposition (optional)",
prop_asset_label_purchase: "Kaufdatum",
prop_asset_label_installation: "Installationsdatum",
prop_asset_label_warranty: "Garantieablauf",
prop_asset_label_lifetime: "Erwartete Lebensdauer (optional)",
prop_asset_label_vendor: "Lieferant / Anbietername (optional)",
prop_asset_label_maintFreq: "Wartungsfrequenz",
prop_asset_label_nextMaint: "Nächste geplante Wartung",
prop_asset_label_staff: "Verantwortliches Personal zuweisen",

prop_asset_label_notes: "Notizen (optional)",

prop_asset_placeholder_name: "z. B. HVAC Split AC",
prop_asset_placeholder_manufacturer: "Hersteller eingeben",
prop_asset_placeholder_model: "Modellnummer eingeben",
prop_asset_placeholder_serial: "Seriennummer eingeben",
prop_asset_placeholder_position: "z. B. Wohnzimmerwand",
prop_asset_placeholder_lifetime: "z. B. 5 Jahre",
prop_asset_placeholder_vendor: "Name eingeben",
prop_asset_placeholder_notes: "z. B. Installiert während der Renovierung 2023. Vierteljährlich auf Lecks prüfen.",
prop_asset_placeholder_searchStaff: "Personal suchen und hinzufügen...",

prop_asset_add_cta: "Asset hinzufügen",

tickets: "Tickets",

ticketsDashboard: "Übersicht",
ticketsAll: "Alle Tickets",
ticketCreate: "Ticket erstellen",
tkt_dash_title: "Ticket-Dashboard",
tkt_dash_subtitle: "Systemweite Übersicht über Ticketaktivitäten, SLAs und Arbeitsverteilung.",

tkt_filter_org: "Organisationen: Alle",
tkt_filter_property: "Immobilien: Alle",
tkt_filter_range: "Zeitraum: Dieser Monat",

tkt_kpi_total: "Gesamtzahl Tickets",
tkt_kpi_open: "Offene Tickets",
tkt_kpi_overdue: "Überfällige Tickets",
tkt_kpi_overdue_breached: "SLA Überschritten",
tkt_kpi_resolvedToday: "Heute gelöst",
tkt_last_24h: "Letzte 24 Stunden",

tkt_vol_trend: "Ticketvolumen-Trend",
tkt_vol_trend_sub: "Gesamt Ticketfluss aller Organisationen",

tkt_by_category: "Tickets nach Kategorie",
tkt_by_category_sub: "Aufschlüsselung der Tickets nach Servicetyp",

tkt_sla_perf: "SLA-Leistung",
tkt_sla_perf_sub: "SLA-Einhaltung im aktuellen Berichtszeitraum",
tkt_sla_rate: "SLA-Erfüllungsquote",

tkt_overdue_breakdown: "Überfälligkeits-Analyse",
tkt_overdue_breakdown_sub: "Alter der Tickets, die SLA verletzt haben",

tkt_top_orgs: "Top 5 Organisationen nach Tickets",
tkt_by_property: "Tickets nach Immobilie",
tkt_high_priority_only: "Nur hohe Priorität",

tkt_heatmap: "Ticket-Heatmap (Zeit vs. Tag)",






tickets: "Tickets",
ticketsDashboard: "Tickets Übersicht",
allTickets: "Alle Tickets",
createTicket: "Ticket Erstellen",

ticket_filters_org: "Organisation",
ticket_filters_property: "Gebäude",
ticket_filters_priority: "Priorität",
ticket_filters_category: "Kategorie",
ticket_filters_status: "Status",
ticket_filters_assigned: "Zugewiesen an",
ticket_filters_created: "Erstellt am",
ticket_filters_sla: "SLA Status",
ticket_filters_clear: "Alle löschen",

ticket_bulk_selected: "Tickets ausgewählt",
ticket_bulk_assign: "Techniker zuweisen",
ticket_bulk_priority: "Priorität ändern",
ticket_bulk_status: "Status aktualisieren",
ticket_bulk_delete: "Löschen",

ticket_col_id: "Ticket-ID",
ticket_col_title: "Titel / Zusammenfassung",
ticket_col_priority: "Priorität",
ticket_col_category: "Kategorie",
ticket_col_org: "Organisation",
ticket_col_property: "Gebäude",
ticket_col_assigned: "Zugewiesen an",
ticket_col_status: "Status",
ticket_col_created: "Erstellt am",
ticket_col_sla: "SLA Fällig",

ticket_create_header: "Neues Ticket erstellen",
ticket_create_sub: "Erfassen Sie ein neues Problem und weisen Sie es dem richtigen Team zu.",
ticket_back_to_all: "Zurück zu allen Tickets",

ticket_info: "Ticketinformationen",
ticket_location: "Standortdetails",
ticket_assignment: "Zuweisung",
ticket_attachments: "Anhänge (Optional)",
ticket_description: "Beschreibung & Notizen",
ticket_sla_settings: "SLA Einstellungen (Erweitert)",

ticket_title: "Ticket Titel",
ticket_type: "Ticket Typ",
ticket_category: "Kategorie",
ticket_requested_by: "Angefordert von",
ticket_priority: "Priorität",
ticket_source: "Quelle der Anfrage",
ticket_desc: "Beschreibung",
ticket_internal_notes: "Interne Notizen",

ticket_org: "Organisation",
ticket_floor: "Stockwerk",
ticket_property: "Gebäude",
ticket_unit: "Einheit / Raum",
ticket_address: "Adresse",
ticket_asset: "Asset",

ticket_assign_to: "Zuweisen an",
ticket_user_picker: "Benutzerauswahl",
ticket_expected: "Voraussichtliches Abschlussdatum",
ticket_notify_user: "Benutzer benachrichtigen",

ticket_drag_drop: "Dateien hier ablegen oder klicken zum Hochladen",
ticket_drag_support: "Unterstützt: Bilder, PDFs, Videos",

ticket_sla_override: "Standard-SLA-Einstellungen überschreiben?",
ticket_cancel: "Abbrechen",
ticket_submit: "Ticket Erstellen",
ticket_edit: "Ticket bearbeiten",
ticket_assign: "Zuweisen / Neu zuweisen",
ticket_title: "Titel",
ticket_priority: "Priorität",
ticket_category: "Kategorie",
ticket_type: "Tickettyp",
ticket_source: "Quelle",
ticket_requested_by: "Angefordert von",
ticket_description: "Beschreibung",
ticket_internal_notes: "Interne Notizen",
ticket_timeline: "Zeitverlauf",
ticket_attachments: "Anhänge",
ticket_chat: "Ticket-Chat",
ticket_related: "Verwandte Tickets",
ticket_type_message: "Nachricht eingeben...",
ticket_close: "Ticket schließen",
ticket_mark_completed: "Als abgeschlossen markieren",
add_internal_note: "Interne Notiz hinzufügen",
back_to_tickets: "Zurück zu Tickets",

assign_title: "Ticket zuweisen",
assign_desc: "Wählen Sie eine Rolle und einen Benutzer zur Zuweisung aus.",
assign_role: "Rolle zuweisen",
expected_date: "Voraussichtliches Abschlussdatum",
available_users: "Verfügbare Benutzer",
assigned_to: "Zugewiesen zu",
tasks_today: "Aufgaben heute",
assignment_note: "Zuweisungsnotiz (optional)",
assignment_note_placeholder: "Notiz für den Mitarbeiter hinzufügen...",
cancel: "Abbrechen",
assign_btn: "Ticket zuweisen",
upload: "Hochladen",




 ticket_status_title: "Ticketstatus aktualisieren",
  ticket_status_sub: "Ändern Sie die Workflow-Stufe und fügen Sie optional eine Notiz hinzu.",
  ticket_status_current: "Aktueller Status",
  ticket_status_new: "Neuer Status",
  ticket_status_choose: "Neuen Status auswählen",
  ticket_status_rule_preview: "Regelhinweis: Anhänge werden vor Abschluss empfohlen.",
  ticket_status_note: "Statusänderungsnotiz (Optional)",
  ticket_status_note_ph: "Grund für diese Statusänderung hinzufügen...",
  ticket_status_note_info: "Diese Notiz wird in der Ticket-Zeitleiste sichtbar sein.",
  ticket_status_attach_advice: "Bitte fügen Sie Nachweisfotos oder Dokumente hinzu.",
  ticket_status_upload_btn: "Anhänge hochladen",
  ticket_status_close_warn1: "Das Schließen eines Tickets ist endgültig.",
  ticket_status_close_warn2: "Ein geschlossenes Ticket kann nicht wieder geöffnet werden.",
  ticket_status_close_feedback: "Nach dem Schließen Mieterfeedback anfordern",
  ticket_status_sla_notice: "Das Abschließen dieses Tickets stoppt die SLA-Timer.",
  ticket_status_submit: "Als abgeschlossen markieren",

  ticket_notes_title: "Interne Notizen",
  ticket_notes_sub: "Nur für Super Admin, Facility Manager und Admins sichtbar.",
  ticket_notes_addNew: "Neue interne Notiz hinzufügen",
  ticket_notes_ph: "Interne Notiz schreiben...",
  ticket_notes_attach: "Dateien anhängen (optional)",
  ticket_notes_tag: "Notiz markieren (optional)",
  ticket_notes_high: "Als wichtige Notiz markieren",
  ticket_notes_info: "Diese Notizen sind für Mieter oder Dienstleister nicht sichtbar.",
  ticket_notes_history: "Notizverlauf",
  ticket_notes_highLabel: "Hohe Wichtigkeit",
  ticket_notes_dummy1: "Mieter meldete starken Wasserschaden. Bitte überwachen.",
  ticket_notes_submit: "Notiz hinzufügen",

  action_cancel: "Abbrechen",
  action_close: "Schließen",


ticket_notes_viewFull: "Vollständige Notiz anzeigen",









  },
};
