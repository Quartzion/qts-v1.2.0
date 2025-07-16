import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

// Import all your components
import AboutUs from './client/src/components/AboutUs';
import Blogs from './client/src/components/Blogs';
import Footer from './client/src/components/Footer';
import Header from './client/src/components/Header';
import Services from './client/src/components/Services';
import TeamSection from './client/src/components/TeamSection';
import WelcomeBanner from './client/src/components/WelcomeBanner';
import GeneralForm from './client/src/components/GeneralForm';
import ConnectWithUs from './client/src/components/ConnectWithUs';
import ConnectWithUsForm from './client/src/components/ConnectWithUsForm';

expect.extend(toHaveNoViolations);

// array of component definitions
const componentsToTest = [
  { name: 'AboutUs', component: () => <AboutUs /> },
  { name: 'Blogs', component: () => <Blogs /> },
  { name: 'Footer', component: () => <Footer /> },
  { name: 'Header', component: () => <Header /> },
  { name: 'Services', component: () => <Services /> },
  { name: 'TeamSection', component: () => <TeamSection /> },
  { name: 'WelcomeBanner', component: () => <WelcomeBanner /> },
  { name: 'GeneralForm', component: ()=> <GeneralForm />},
  { name: 'ConnectWithUs', component: ()=> <ConnectWithUs />},
  { name: 'ConnectWitUsForm', component: ()=> <ConnectWithUsForm />}
];

describe('Accessibility tests (axe-core)', () => {
  componentsToTest.forEach(({ name, component }) => {
    test(`${name} should have no accessibility violations`, async () => {
      const { container } = render(component);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});

