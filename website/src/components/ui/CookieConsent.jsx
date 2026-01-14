import React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings } from 'lucide-react';
import { useLocalStorage } from '../../hooks/useCustomHooks';
import Button from './Button';
import Modal from './Modal';

const CookieConsent = () => {
  const [cookieConsent, setCookieConsent] = useLocalStorage('oryx-cookie-consent', null);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    if (cookieConsent === null) {
      const timer = setTimeout(() => setShowBanner(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [cookieConsent]);

  const handleAcceptAll = () => {
    setCookieConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    });
    setShowBanner(false);
  };

  const handleAcceptSelected = () => {
    setCookieConsent({
      ...preferences,
      timestamp: new Date().toISOString()
    });
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleReject = () => {
    setCookieConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    });
    setShowBanner(false);
  };

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          >
            <div className="max-w-6xl mx-auto bg-oryx-blue/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-oryx-orange/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-6 h-6 text-oryx-orange" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">
                      We Value Your Privacy
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      We use cookies to enhance your browsing experience, serve personalized content, 
                      and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                  <button
                    onClick={() => setShowSettings(true)}
                    className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    <Settings className="w-4 h-4" />
                    Customize
                  </button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={handleReject}
                  >
                    Reject All
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={handleAcceptAll}
                  >
                    Accept All
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Settings Modal */}
      <Modal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        title="Cookie Preferences"
        size="md"
      >
        <div className="space-y-6">
          <p className="text-gray-600">
            Manage your cookie preferences. You can enable or disable different types of cookies below.
          </p>

          {/* Necessary Cookies */}
          <div className="p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <h5 className="font-semibold text-oryx-blue">Necessary Cookies</h5>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                Always Active
              </span>
            </div>
            <p className="text-sm text-gray-600">
              These cookies are essential for the website to function properly. They cannot be disabled.
            </p>
          </div>

          {/* Analytics Cookies */}
          <div className="p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <h5 className="font-semibold text-oryx-blue">Analytics Cookies</h5>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:ring-4 peer-focus:ring-oryx-orange/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-oryx-orange"></div>
              </label>
            </div>
            <p className="text-sm text-gray-600">
              Help us understand how visitors interact with our website by collecting anonymous data.
            </p>
          </div>

          {/* Marketing Cookies */}
          <div className="p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <h5 className="font-semibold text-oryx-blue">Marketing Cookies</h5>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:ring-4 peer-focus:ring-oryx-orange/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-oryx-orange"></div>
              </label>
            </div>
            <p className="text-sm text-gray-600">
              Used to deliver personalized advertisements and measure advertising campaign effectiveness.
            </p>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
            <Button variant="outline" size="sm" onClick={() => setShowSettings(false)}>
              Cancel
            </Button>
            <Button variant="primary" size="sm" onClick={handleAcceptSelected}>
              Save Preferences
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CookieConsent;
