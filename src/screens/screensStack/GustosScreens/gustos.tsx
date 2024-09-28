import React, { useEffect, useState } from "react";
import GustosView from "./gustosView";
import { IPreference } from "@/interfaces/prefererenceInterfaces/IPreference";
import PreferencesService from "@/Services/PreferencesServices/preferencesService";
import { IResponse } from "@/interfaces/IResponse";
import { initialUserPreferences, IUserPreference } from "@/interfaces/prefererenceInterfaces/IUserPreference";
import UserPreferencesService from "@/Services/PreferencesServices/userPreferenceServices";
import Loader from "@/components/atoms/Loader";
import { initialUserPreferenceQuestion, IUserPreferenceQuestion } from "@/interfaces/prefererenceInterfaces/IUserPreferenceQuestion";



const Gustos: React.FC = () => {
  const [preferences, setPreferences] = useState<IPreference[]>([]);
  const [selectedPreferences, setSelectedPreferences] = useState<number[]>([]);
  const [userPreferences, setUserPreferences] = useState<IUserPreference>(initialUserPreferences);
  const [loading, setLoading] = useState<boolean>(true);
  const [responses, setResponses] = useState<IUserPreferenceQuestion>(initialUserPreferenceQuestion);


  useEffect(() => {
    const fetchPreferences = async () => {
      try {
        const response: IResponse = await PreferencesService.getPreferences();
        setPreferences(response.data);
      } catch (error) {
        console.error("Error fetching preferences:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPreferences();
  }, []);

  if (loading) {
    return <Loader />;
  }


  const handleSelectionChange = (selectedIds: number[]) => {
    setSelectedPreferences(selectedIds);
    setUserPreferences((prev) => {
      // Genera un número aleatorio entre 0 y 9999
      const newUserId = Math.floor(Math.random() * 10000);
      const formattedUserId = String(newUserId).padStart(4, '0');
      return {
        ...prev,
        userId: formattedUserId,
        preferences: selectedIds,
      };
    });
  };


  const handleSubmitPreferences = async () => {
    try {
      const response = await UserPreferencesService.postUserPreferences(userPreferences);
      console.log('User preferences saved successfully:', response.message);
    } catch (error) {
      console.error('Error saving user preferences:', error);
    }
  };


  const handleResponseChange = (key: keyof IUserPreferenceQuestion, value: string) => {
    setResponses((prev) => ({ ...prev, [key]: value }));
  };


  return (
    <GustosView
      preferences={preferences}
      handleSelectionChange={handleSelectionChange}
      handleSubmitPreferences={handleSubmitPreferences}
      selectedPreferences={selectedPreferences}
      responses={responses}
      handleResponseChange={handleResponseChange}
    />
  )
};

export default Gustos;
