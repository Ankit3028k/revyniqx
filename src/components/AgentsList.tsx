// src/components/AgentsList.tsx
import { Avatar } from './elements/Avartar';
import '../assets/css/styles.css';
import DemoPer from '../assets/img/icon/demoPer.svg'

interface Agent {
  id: string;
  name: string;
  avatar: string;
  tags: { text: string; color: string }[];
}

const agents: Agent[] = [
  {
    id: '1',
    name: 'Kavya Sharma',
    avatar: DemoPer,
    tags: [
      { text: 'Talk to them', color: 'bg-green-100 text-green-800' },
      { text: 'Objection Handling', color: 'bg-red-100 text-red-800' }
    ]
  },
  {
    id: '2',
    name: 'Deepak Porwal',
    avatar: DemoPer,
    tags: [
      { text: 'Talk to them', color: 'bg-green-100 text-green-800' },
      { text: 'Objection Handling', color: 'bg-red-100 text-red-800' }
    ]
  },
  {
    id: '3',
    name: 'Naina Dwivedi',
    avatar: DemoPer,
    tags: [
      { text: 'Talk to them', color: 'bg-green-100 text-green-800' },
      { text: 'Objection Handling', color: 'bg-red-100 text-red-800' }
    ]
  },
  {
    id: '4',
    name: 'Abish Sabastian',
    avatar: DemoPer,
    tags: [
      { text: 'Talk to them', color: 'bg-green-100 text-green-800' },
      { text: 'Objection Handling', color: 'bg-red-100 text-red-800' }
    ]
  },
  {
    id: '5',
    name: 'Angela Jackson',
    avatar: DemoPer,
    tags: [
      { text: 'Talk to them', color: 'bg-green-100 text-green-800' },
      { text: 'Objection Handling', color: 'bg-red-100 text-red-800' }
    ]
  }
];

export const AgentsList = () => {
  return (
    <div className="agents-list-container">
      <div className="agents-list-header">
        <h2 className="agents-list-title">Agents</h2>
        <button className="meetings-list-view-all" onClick={() => window.location.href = '/agents'}>View All</button>

      </div>
      
      <div className="agents-list">
        {agents.map((agent) => (
          <div key={agent.id} className="agent-item">
            <div className="agent-info">
              <div className="agent-avatar-container">
                <Avatar name={agent.name} size="md" src={agent.avatar} />
                <div className="agent-status-indicator"></div>
              </div>
              <div className="agent-details">
                <p className="agent-name primary-blue">{agent.name}</p>
                <div className="agent-tags">
                  {agent.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`agent-tag ${tag.color}`}
                    >
                      {tag.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};