import React, { useState } from "react";
import Login from "../../Components/AuthForms/Login";
import SignUp from "../../Components/AuthForms/SignUp";

const AuthPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  const authPageHeight = {
    minHeight: "80vh",
  };

  return (
    <section
      style={authPageHeight}
      className="w-full flex flex-col items-center justify-center"
    >
      {showLogin && (
        <div className="w-5/6 md:w-3/4 lg:w-1/2 mx-auto">
          <Login setShowLogin={setShowLogin} />
        </div>
      )}
      {!showLogin && (
        <div className="w-5/6 md:w-3/4 lg:w-1/2 mx-auto">
          <SignUp setShowLogin={setShowLogin} />
        </div>
      )}
    </section>
  );
};

export default AuthPage;
