import React from 'react';
import { MapPin, Calendar, DollarSign, Clock, Radio, Eye, AlertTriangle, Target } from 'lucide-react';
import { Job } from '../../types';
import { useAuth } from '../../contexts/AuthContext';

interface JobCardProps {
  job: Job;
  onClick: () => void;
  isBookmarked?: boolean;
  onBookmark?: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onClick, isBookmarked = false, onBookmark }) => {
  const { isSubscribed } = useAuth();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getJobTypeColor = (jobType: string) => {
    const colors: Record<string, string> = {
      'Hotshot Crew': 'from-red-600 to-orange-500',
      'Engine Crew': 'from-green-600 to-emerald-500',
      'Hand Crew': 'from-amber-600 to-yellow-500',
      'Helitack': 'from-blue-600 to-cyan-500',
      'Smokejumper': 'from-purple-600 to-pink-500',
      'Prevention': 'from-teal-600 to-green-500',
      'Support': 'from-gray-600 to-slate-500',
      'Heavy Equipment': 'from-orange-600 to-red-500',
      'Leadership': 'from-indigo-600 to-purple-500',
      'Medical': 'from-pink-600 to-rose-500',
      'Aviation': 'from-sky-600 to-blue-500',
      'Investigation': 'from-violet-600 to-purple-500'
    };
    return colors[jobType] || 'from-gray-600 to-slate-500';
  };

  const getExperienceIcon = (level: string) => {
    switch (level) {
      case 'Entry Level':
        return '🔰';
      case 'Intermediate':
        return '⭐';
      case 'Advanced':
        return '🏆';
      default:
        return '📋';
    }
  };

  return (
    <div 
      className="bg-gray-800 rounded-lg border border-gray-700 p-6 hover:border-orange-500 transition-all cursor-pointer group hover:shadow-lg hover:shadow-orange-500/20"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <h3 className="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors">
              {job.title}
            </h3>
            <span className="ml-2 text-lg">{getExperienceIcon(job.experienceLevel)}</span>
          </div>
          <p className="text-orange-400 font-medium flex items-center">
            <Radio className="h-4 w-4 mr-1" />
            {job.agency}
          </p>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="flex items-center text-gray-400 text-sm">
            <Eye className="h-4 w-4 mr-1" />
            {job.views}
          </div>
          {onBookmark && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onBookmark();
              }}
              className={`p-2 rounded-full transition-colors ${
                isBookmarked
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
              }`}
            >
              <Target className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex items-center text-gray-300">
          <MapPin className="h-4 w-4 mr-2 text-orange-500" />
          <span className="text-sm">{job.location}</span>
        </div>
        <div className="flex items-center text-gray-300">
          <DollarSign className="h-4 w-4 mr-2 text-green-400" />
          <span className="text-sm font-medium">{job.payRate}</span>
        </div>
        <div className="flex items-center text-gray-300">
          <Calendar className="h-4 w-4 mr-2 text-blue-400" />
          <span className="text-sm">{formatDate(job.startDate)}</span>
        </div>
        <div className="flex items-center text-gray-300">
          <Clock className="h-4 w-4 mr-2 text-purple-400" />
          <span className="text-sm">{job.experienceLevel}</span>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getJobTypeColor(job.jobType)} text-white`}>
          {job.jobType}
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-400">
            Posted {formatDate(job.postedDate)}
          </span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-green-400 font-medium">ACTIVE</span>
        </div>
      </div>

      {!isSubscribed && (
        <div className="p-3 bg-red-900/30 border border-red-800 rounded-md">
          <div className="flex items-center">
            <AlertTriangle className="h-4 w-4 text-red-400 mr-2" />
            <div>
              <p className="text-sm text-red-300 font-medium">
                <strong>Certification Required:</strong> Full assignment details, contact information, and deployment instructions
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobCard;