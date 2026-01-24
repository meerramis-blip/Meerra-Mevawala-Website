
import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#FDFCFB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold mb-8 text-center">Cookie Policy</h1>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p className="italic text-sm text-gray-500">Last Updated: May 2024</p>
          <p>
            This is the Cookie Policy for <a href="https://www.meerramevawala.com" className="text-[#D4AF37] hover:underline">https://www.meerramevawala.com</a>.
          </p>

          <section>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">What Are Cookies</h2>
            <p>
              As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or ‘break’ certain elements of the sites functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">How We Use Cookies</h2>
            <p>
              We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">Disabling Cookies</h2>
            <p>
              You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore it is recommended that you do not disable cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">The Cookies We Set</h2>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Account related cookies:</strong> If you create an account with us then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out however in some cases they may remain afterward to remember your site preferences when logged out.
              </li>
              <li>
                <strong>Login related cookies:</strong> We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.
              </li>
              <li>
                <strong>Email newsletters related cookies:</strong> This site offers newsletter or email subscription services and cookies may be used to remember if you are already registered and whether to show certain notifications which might only be valid to subscribed/unsubscribed users.
              </li>
              <li>
                <strong>Orders processing related cookies:</strong> This site offers e-commerce or payment facilities and some cookies are essential to ensure that your order is remembered between pages so that we can process it properly.
              </li>
              <li>
                <strong>Surveys related cookies:</strong> From time to time we offer user surveys and questionnaires to provide you with interesting insights, helpful tools, or to understand our user base more accurately. These surveys may use cookies to remember who has already taken part in a survey or to provide you with accurate results after you change pages.
              </li>
              <li>
                <strong>Forms related cookies:</strong> When you submit data through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.
              </li>
              <li>
                <strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences, we need to set cookies so that this information can be called whenever you interact with a page that is affected by your preferences.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">Third Party Cookies</h2>
            <p>
              In some special cases, we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.
            </p>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                This site uses Google Analytics which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience.
              </li>
              <li>
                From time to time we test new features and make subtle changes to the way that the site is delivered.
              </li>
              <li>
                The Google AdSense service we use to serve advertising uses a DoubleClick cookie to serve more relevant ads across the web.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">More Information</h2>
            <p>
              Hopefully, that has clarified things for you, and as was previously mentioned if there is something that you aren’t sure whether you need or not it’s usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.
            </p>
            <p>
              However if you are still looking for more information then you can contact us through one of our preferred contact methods:
            </p>
            <p className="font-semibold text-[#D4AF37]">Email: meerramis@gmail.com</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
