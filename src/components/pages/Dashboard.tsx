// src/components/pages/Dashboard.tsx
import { AgentsList } from '../AgentsList';
import { MeetingsList } from '../MeetingList';
import '../../assets/css/styles.css';

import Calender from '../../assets/img/icon/calender.svg';
import Smile from '../../assets/img/icon/smile.svg';
import Dollar from '../../assets/img/icon/dollar.svg';
import Like from '../../assets/img/icon/like.svg';

const MetricCard = ({
  title,
  value,
  change,
  icon,
  changeType,
}: {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  changeType: 'positive' | 'negative';
}) => (
  <div className="stats-card">
    <div className="stats-card-header ">
      <div className="stats-card-info row">
        {icon}
        <p className="stats-card-value">{value}</p>
        <p className="stats-card-title">
          {title}
          
        </p>
        
       
      </div>
       <p className={`stats-card-change ${changeType}`}>
          <span>↑</span> {change}
        </p>
    </div>
  </div>
);

const AISummaryCard = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => (
  <div className="ai-summary-card">
    <h3 className="ai-summary-title ">AI Summary - {title}</h3>
    <ul className="ai-summary-list">
      {items.map((item, index) => (
        <li key={index} className="ai-summary-item">
          <span className="ai-summary-bullet "><img src={Like} alt="" /></span>
          <span className="ai-summary-text primary-blue">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Metric Cards */}
      <div className="stats-grid">
        <MetricCard
          title="Sessions This Week"
          value="30"
          change="+4%"
          changeType="positive"
          icon={<img src={Calender} alt="Calendar" />}
        />

        <MetricCard
          title="Positive Sessions This Week"
          value="15"
          change="-11%"
          changeType="negative"
          icon={<img src={Smile} alt="Smile Icon" />}
        />

        <MetricCard
          title="Deals Closed This Week"
          value="03"
          change="+25%"
          changeType="positive"
          icon={<img src={Dollar} alt="Dollar Icon" />}
        />
      </div>

      <div className="dashboard-content-grid">
        <AgentsList />
        <MeetingsList />
      </div>

      <div className="ai-summary-grid">
        <AISummaryCard
          title="Team"
          items={[
            'Objection handling of sales employees has improved by 6%.',
            'Lead Conversion Rate improved by 9%.',
          ]}
        />

        <AISummaryCard
          title="Product"
          items={[
            '45% of leads found the silver plan more useful.',
            '33% of leads are ready to buy the starter plan after the first meeting.',
            '50% of leads found the platinum plan more valuable after the demo.',
          ]}
        />
      </div>
    </div>
  );
};

export default Dashboard;
