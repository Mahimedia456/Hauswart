export default {
  appName: "Hauswart",
  version: "Version",

  roles: {
    facilityManager: "Facility Manager",
    technician: "Techniker",
    serviceProvider: "Dienstleister",
    tenant: "Mieter",
  },

  onboarding: {
    skip: "Überspringen",
    next: "Weiter",
    getStarted: "Loslegen",

    report: {
      title: "Probleme sofort melden",
      description:
        "Erstellen Sie Wartungsanfragen in Sekunden mit Fotos, Videos und klaren Beschreibungen.",
    },
    track: {
      title: "Fortschritt einfach verfolgen",
      description:
        "Bleiben Sie in Echtzeit über Arbeitsaufträge und Serviceanfragen informiert.",
    },
    manage: {
      title: "Alles an einem Ort verwalten",
      description:
        "Von der Meldung bis zur Lösung – alles bleibt übersichtlich und transparent.",
    },
  },

  roleSelect: {
    title: "Rolle auswählen",
    subtitle:
      "Wählen Sie, wie Sie die Hauswart-App nutzen möchten.",
    continue: "Weiter",

    facilityManager: {
      title: "Facility Manager",
      description: "Überwachen Sie den Gebäudebetrieb.",
      badge: "Voller Zugriff",
    },
    technician: {
      title: "Techniker",
      description: "Arbeitsaufträge ausführen.",
      badge: "Operativer Zugriff",
    },
    serviceProvider: {
      title: "Dienstleister",
      description: "Dienstleistungen verwalten.",
      badge: "Dienstleister-Zugriff",
    },
    tenant: {
      title: "Mieter",
      description: "Reparaturen anfordern.",
      badge: "Mieterzugriff",
    },
  },

  login: {
    title: "Willkommen zurück",
    subtitle: "Bitte anmelden",
    email: "E-Mail / Benutzername",
    password: "Passwort",
    forgot: "Passwort vergessen?",
    submit: "Anmelden",
  },

  tickets: {
    title: "Meine Tickets",
    myTickets: "Aktive Tickets",
    history: "Verlauf",
    filterByDate: "Nach Datum filtern",
    emptyTitle: "Keine Tickets gefunden",
    emptyDesc: "Es sind keine Tickets vorhanden",
  },

  profile: {
    title: "Profil",
    account: "Konto",
    preferences: "Einstellungen",
    support: "Support & Rechtliches",
    edit: "Profil bearbeiten",
    password: "Passwort ändern",
    unit: "Wohneinheit",
    emergency: "Notfallkontakt",
    language: "Sprache",
    notifications: "Benachrichtigungen",
    privacy: "Datenschutz",
    terms: "AGB",
    logout: "Abmelden",
  },

  changePassword: {
    title: "Passwort ändern",
    current: "Aktuelles Passwort",
    new: "Neues Passwort",
    confirm: "Neues Passwort bestätigen",
    currentPlaceholder: "Aktuelles Passwort eingeben",
    newPlaceholder: "Neues Passwort eingeben",
    confirmPlaceholder: "Neues Passwort erneut eingeben",
    hint: "Mindestens 8 Zeichen",
    submit: "Passwort aktualisieren",
  },
  tabs: {
  home: "Start",
  tickets: "Tickets",
  chat: "Chat",
  alerts: "Benachrichtigungen",
  profile: "Profil",
},

};
