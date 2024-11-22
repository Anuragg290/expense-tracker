import React from 'react';
import { ArrowDownTrayIcon, ShieldCheckIcon, AdjustmentsHorizontalIcon, KeyIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'One-Click Tracking',
    description:
      'Log expenses instantly with a single tap, keeping your records up-to-date without hassle',
    icon: ArrowDownTrayIcon,
  },
  {
    name: 'Budget Insights',
    description:
      'Get real-time insights into your budget to help you stay on track and achieve your financial goals.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Customizable Categories',
    description:
      'Organize your expenses by creating categories that fit your unique lifestyle',
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: 'Enhanced Security',
    description:
      'Your data is safe with us, thanks to advanced security features that protect your personal information.',
    icon: KeyIcon,
  },
];


const Features = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
          All the Tools You Need to Master Your Finances
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
          Effortlessly manage your spending, track expenses, and secure your financial future with our powerful features.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
