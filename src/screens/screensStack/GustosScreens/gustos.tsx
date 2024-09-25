import React, { useEffect, useState } from "react";
import GustosView from "./gustosView";
import { IPreference } from "@/interfaces/IPreference";
import PreferencesService from "@/Services/PreferencesServices/preferencesService";
import { IResponse } from "@/interfaces/IResponse";


const Gustos: React.FC = () => {
  const [preferences, setPreferences] = useState<IPreference[]>([]); 

  useEffect(() => {
    const fetchPreferences = async () => {
      try {
        const response: IResponse = await PreferencesService.getPreferences();
        setPreferences(response.data);
        console.log(response.data, "response.data")
      } catch (error) {
        console.error("Error fetching preferences:", error);
      }
    };

    fetchPreferences(); 
  }, []); 

  return (
    <GustosView
      preferences={preferences}
    />
  )
};

export default Gustos;
