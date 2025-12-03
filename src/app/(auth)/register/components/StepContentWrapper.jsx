// File: web/src/app/(auth)/register/components/StepContentWrapper.jsx

export const StepContentWrapper = ({ title, description, children }) => (
  <fieldset className="bg-white/30 p-8 border-t-4 border-stone-800">
    <h2 className="font-serif text-3xl font-bold text-black mb-3">{title}</h2>
    <p className="font-sans text-sm text-gray-700 mb-8 max-w-prose">
      {description}
    </p>
    <div className="space-y-6">{children}</div>
  </fieldset>
);
