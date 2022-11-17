import React from "react";

import { Routes, Route } from "react-router-dom";
import ActivityList from "./Activity/ActivityList";
import ActivitySection from "./Activity/ActivitySection";
import ChatList from "./Chat/ChatList";
import ChatSection from "./Chat/ChatSection";
import Modal from "../auth/Login";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import TeamsList from "./team/TeamsList"
import TeamSection from "./team/TeamSection"



const Wrapper = () => {
  return (
    <div>
      <Routes>
        <Route
          path="chat"
          element={
            <>
              
              <Navbar />
              <div style={{ display: "flex" }}>
                <SideNav /> <ChatList />
              </div>
            </>
          }
        >
          <Route path=":id" element={<ChatSection />} />
        </Route>
        <Route
          path="activity"
          element={
            <>
              <Navbar />
              <div style={{ display: "flex" }}>
                <SideNav /> <ActivityList />
              </div>
            </>
          }
        >
          <Route path=":id" element={<ActivitySection />} />
        </Route>
        <Route path="teams" element={
          <>
          <Navbar />
          <div style={{display : "flex"}}>
          <SideNav /> <TeamsList />
          </div>
        </>
        } >
          <Route path=":id" element={ <TeamSection /> } />
        </Route>
        
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </div>
  );
};

export default Wrapper;
