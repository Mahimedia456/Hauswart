// src/modules/superAdmin/components/tickets/InternalNotesModal.jsx

import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

export default function InternalNotesModal({ open, onClose, notes = [] }) {
  const { lang } = useLanguage();
  const dict = t[lang];

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 p-4">
      <div className="flex h-[80vh] w-full max-w-[640px] flex-col overflow-hidden rounded-xl bg-white dark:bg-background-dark shadow-2xl">

        {/* HEADER */}
        <header className="flex shrink-0 items-start justify-between border-b border-gray-200 dark:border-gray-700 p-6">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              {dict.ticket_notes_title}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {dict.ticket_notes_sub}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </header>

        {/* BODY */}
        <main className="flex-1 overflow-y-auto p-6">

          {/* Add New Note */}
          <section className="flex flex-col gap-4">
            <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200">
              {dict.ticket_notes_addNew}
            </h3>

            <textarea
              className="form-textarea w-full rounded-lg border-none bg-gray-100 dark:bg-gray-800 p-4 
              text-sm text-gray-800 dark:text-gray-200 placeholder-gray-500 
              dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder={dict.ticket_notes_ph}
              rows={5}
            ></textarea>

            {/* Attach files */}
            <div className="flex cursor-pointer items-center gap-3 text-sm text-gray-600 dark:text-gray-300 hover:text-primary">
              <span className="material-symbols-outlined text-base">attach_file</span>
              <span>{dict.ticket_notes_attach}</span>
            </div>

            {/* Tag + High Importance */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <select
                  className="form-select w-full rounded-lg border-gray-300 dark:border-gray-600 
                  bg-white dark:bg-background-dark text-sm text-gray-600 dark:text-gray-300 
                  focus:border-primary focus:ring-primary/50"
                >
                  <option>{dict.ticket_notes_tag}</option>
                  <option>General</option>
                  <option>Escalation</option>
                  <option>SLA Exception</option>
                  <option>Safety Concern</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <input
                  id="highImportance"
                  type="checkbox"
                  className="form-checkbox h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/50"
                />
                <label
                  htmlFor="highImportance"
                  className="text-sm text-gray-700 dark:text-gray-300"
                >
                  {dict.ticket_notes_high}
                </label>
              </div>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              {dict.ticket_notes_info}
            </p>
          </section>

          {/* Divider */}
          <div className="my-6 border-t border-gray-200 dark:border-gray-700"></div>

          {/* Notes History */}
          <section className="flex flex-col gap-6">
            <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200">
              {dict.ticket_notes_history}
            </h3>

            <div className="relative flex flex-col gap-6 pl-6">
              {/* Timeline Line */}
              <div className="absolute left-2.5 top-2.5 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

              {/* Example high priority note */}
              <div className="relative flex flex-col gap-3">
                <div className="absolute -left-[23px] top-0 flex size-5 items-center justify-center 
                rounded-full bg-primary ring-4 ring-white dark:ring-background-dark">
                  <div className="size-1.5 rounded-full bg-white"></div>
                </div>

                <div className="w-full rounded-lg border border-gray-200 dark:border-gray-700 
                bg-white dark:bg-gray-800 p-4 shadow-sm">
                  <div className="mb-3 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        className="size-8 rounded-full object-cover"
                        src="https://i.pravatar.cc/100?img=1"
                        alt="avatar"
                      />
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-gray-100">John Carter</p>
                        <span className="text-xs text-gray-500">Super Admin</span>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500">12 Nov 2025 — 3:15 PM</p>
                  </div>

                  {/* Badges */}
                  <div className="mb-3 flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-red-100 
                    dark:bg-red-900/50 px-2 py-0.5 text-xs font-medium text-red-700 dark:text-red-300">
                      {dict.ticket_notes_highLabel}
                    </span>

                    <span className="inline-flex items-center rounded-full bg-gray-100 
                    dark:bg-gray-700 px-2 py-0.5 text-xs font-medium text-gray-600 dark:text-gray-300">
                      Escalation
                    </span>
                  </div>

                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {dict.ticket_notes_dummy1}
                  </p>

                  <div className="mt-4 flex items-center justify-end gap-4">
                    <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-primary">
                      <span className="material-symbols-outlined text-sm">edit</span> Edit
                    </button>
                    <button className="flex items-center gap-1 text-sm text-red-500 hover:text-red-700">
                      <span className="material-symbols-outlined text-sm">delete</span> Delete
                    </button>
                  </div>
                </div>
              </div>

              {/* Example normal note */}
              <div className="relative flex flex-col gap-3">
                <div className="absolute -left-[23px] top-0 flex size-5 items-center justify-center 
                rounded-full bg-gray-300 dark:bg-gray-600 ring-4 ring-white dark:ring-background-dark"></div>

                <div className="w-full rounded-lg border border-gray-200 dark:border-gray-700 
                bg-white dark:bg-gray-800 p-4 shadow-sm">
                  <div className="mb-3 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        className="size-8 rounded-full object-cover"
                        src="https://i.pravatar.cc/100?img=2"
                        alt="avatar"
                      />

                      <div>
                        <p className="font-semibold text-gray-900 dark:text-gray-100">
                          Maria Rodriguez
                        </p>
                        <span className="text-xs text-gray-500">Facility Manager</span>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500">10 Nov 2025 — 9:45 AM</p>
                  </div>

                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The new security cameras for the lobby have been installed.
                  </p>

                  {/* Attachment chip */}
                  <div className="flex mt-3">
                    <div className="flex items-center gap-2 rounded-lg border border-gray-300 
                    bg-gray-50 p-2 text-sm">
                      <span className="material-symbols-outlined text-gray-500">picture_as_pdf</span>
                      <span className="text-gray-700">Installation_Report.pdf</span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-end gap-4">
                    <button className="text-sm font-medium text-gray-600 hover:text-primary">
                      {dict.ticket_notes_viewFull}
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="flex shrink-0 items-center justify-between border-t 
        border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 p-6">
          <button
            onClick={onClose}
            className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-600 
            hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            {dict.action_close}
          </button>

          <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white 
          hover:bg-opacity-90">
            {dict.ticket_notes_submit}
          </button>
        </footer>
      </div>
    </div>
  );
}
