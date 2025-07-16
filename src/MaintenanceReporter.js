import { useState, useEffect } from 'react';
import { maintenanceAPI } from './supabase';

const MaintenanceReporter = () => {
  const [reports, setReports] = useState([]);
  const [currentReport, setCurrentReport] = useState({
    title: '',
    description: '',
    category: '',
    location: '',
    urgency: 'medium',
    photos: [],
    videos: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    try {
      const data = await maintenanceAPI.getReports();
      setReports(data);
    } catch (error) {
      alert('Error loading reports');
    }
  };

  const handleInputChange = (field, value) => {
    setCurrentReport(prev => ({ ...prev, [field]: value }));
  };

  const submitReport = async () => {
    setIsSubmitting(true);
    try {
      const report = await maintenanceAPI.submitReport(currentReport);
      alert('Report submitted!');
    } catch (err) {
      alert('Error submitting report.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 text-white">
      <h2 className="text-xl mb-4">Submit Maintenance Report</h2>
      <input value={currentReport.title} onChange={(e) => handleInputChange('title', e.target.value)} placeholder="Title" />
      <textarea value={currentReport.description} onChange={(e) => handleInputChange('description', e.target.value)} placeholder="Description" />
      <button onClick={submitReport} disabled={isSubmitting}>Submit</button>
    </div>
  );
};

export default MaintenanceReporter;
