// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  trainingSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Module 1: Foundations of Unicorn Leadership',
      items: [
        'module-1-foundations/overview',
        'module-1-foundations/unicorn-traits',
        'module-1-foundations/vulnerability-as-strength',
        'module-1-foundations/the-it-leadership-gap',
        'module-1-foundations/exercises',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: Self-Awareness & Authenticity',
      items: [
        'module-2-self-awareness/overview',
        'module-2-self-awareness/knowing-your-strengths',
        'module-2-self-awareness/rumbling-with-vulnerability',
        'module-2-self-awareness/emotional-intelligence-in-tech',
        'module-2-self-awareness/exercises',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: Building Unicorn Teams',
      items: [
        'module-3-team-building/overview',
        'module-3-team-building/hiring-for-unicorn-traits',
        'module-3-team-building/psychological-safety',
        'module-3-team-building/trust-building-braving',
        'module-3-team-building/exercises',
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Courageous Leadership in Tech',
      items: [
        'module-4-courageous-leadership/overview',
        'module-4-courageous-leadership/brave-conversations',
        'module-4-courageous-leadership/leading-through-change',
        'module-4-courageous-leadership/innovation-and-failure',
        'module-4-courageous-leadership/exercises',
      ],
    },
    {
      type: 'category',
      label: 'Module 5: Culture & Organizational Impact',
      items: [
        'module-5-culture/overview',
        'module-5-culture/values-driven-culture',
        'module-5-culture/servant-leadership-in-it',
        'module-5-culture/scaling-unicorn-culture',
        'module-5-culture/exercises',
      ],
    },
    {
      type: 'category',
      label: 'Module 6: Integration & Action Planning',
      items: [
        'module-6-integration/overview',
        'module-6-integration/personal-leadership-manifesto',
        'module-6-integration/day-action-plan',
        'module-6-integration/peer-accountability',
        'module-6-integration/exercises',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'resources/reading-list',
        'resources/facilitator-guide',
        'resources/assessment-tools',
      ],
    },
  ],
};

export default sidebars;
