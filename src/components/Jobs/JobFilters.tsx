import React from 'react';
import { Search, Target, Radio, AlertTriangle } from 'lucide-react';
import { JobFilter } from '../../types';

interface JobFiltersProps {
  filters: JobFilter;
  onFilterChange: (filters: JobFilter) => void;
}

const JobFilters: React.FC<JobFiltersProps> = ({ filters, onFilterChange }) => {
  const deploymentZones = [
    'All Zones',
    'Orange County, CA',
    'Riverside County, CA', 
    'San Bernardino County, CA',
    'Los Angeles County, CA',
    'San Diego County, CA'
  ];

  const assignmentTypes = [
    'All Assignments',
    'Hotshot Crew',
    'Engine Crew', 
    'Hand Crew',
    'Helitack',
    'Smokejumper',
    'Prevention',
    'Support',
    'Heavy Equipment',
    'Leadership',
    'Medical',
    'Aviation',
    'Investigation'
  ];

  const qualificationLevels = [
    'All Levels',
    'Entry Level',
    'Intermediate', 
    'Advanced'
  ];

  const handleFilterChange = (key: keyof JobFilter, value: string) => {
    onFilterChange({
      ...filters,
      [key]: value === 'All Zones' || value === 'All Assignments' || value === 'All Levels' ? '' : value
    });
  };

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 mb-6">
      <div className="flex items-center mb-4">
        <Target className="h-5 w-5 text-orange-500 mr-2" />
        <h3 className="text-lg font-semibold text-white">Assignment Filters</h3>
        <div className="ml-auto flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-green-400 font-medium">LIVE UPDATES</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div className="lg:col-span-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Search Assignments
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by assignment, agency, or incident type..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="pl-10 w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        </div>

        {/* Deployment Zone */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Deployment Zone
          </label>
          <select
            value={filters.location || 'All Zones'}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          >
            {deploymentZones.map(zone => (
              <option key={zone} value={zone}>
                {zone}
              </option>
            ))}
          </select>
        </div>

        {/* Assignment Type */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Assignment Type
          </label>
          <select
            value={filters.jobType || 'All Assignments'}
            onChange={(e) => handleFilterChange('jobType', e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          >
            {assignmentTypes.map(type => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Qualification Level */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Qualification Level
          </label>
          <select
            value={filters.experienceLevel || 'All Levels'}
            onChange={(e) => handleFilterChange('experienceLevel', e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          >
            {qualificationLevels.map(level => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        {/* Pay Rate */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Compensation Rate
          </label>
          <select
            value={filters.payRate || 'All Rates'}
            onChange={(e) => handleFilterChange('payRate', e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          >
            <option value="All Rates">All Rates</option>
            <option value="$15-20/hour">$15-20/hour</option>
            <option value="$20-25/hour">$20-25/hour</option>
            <option value="$25-30/hour">$25-30/hour</option>
            <option value="$30-35/hour">$30-35/hour</option>
            <option value="$35+/hour">$35+/hour</option>
          </select>
        </div>
      </div>

      {/* Quick Filters */}
      <div className="mt-4 pt-4 border-t border-gray-700">
        <div className="flex items-center space-x-2 text-sm">
          <Radio className="h-4 w-4 text-orange-500" />
          <span className="text-gray-300">Quick Filters:</span>
          <button 
            onClick={() => handleFilterChange('jobType', 'Hotshot Crew')}
            className="px-2 py-1 bg-red-600 text-white rounded text-xs hover:bg-red-700 transition-colors"
          >
            Hotshot
          </button>
          <button 
            onClick={() => handleFilterChange('jobType', 'Helitack')}
            className="px-2 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 transition-colors"
          >
            Aviation
          </button>
          <button 
            onClick={() => handleFilterChange('experienceLevel', 'Entry Level')}
            className="px-2 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700 transition-colors"
          >
            Entry Level
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobFilters;