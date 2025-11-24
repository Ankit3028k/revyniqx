// src/components/MeetingList.tsx
import { Avatar } from './elements/Avartar';
import '../assets/css/styles.css';
import Waveform from '../assets/img/icon/wave.svg';
import Play from '../assets/img/icon/play.svg';
import DemoPer from '../assets/img/icon/demoPer.svg';
import Mic from '../assets/img/icon/mic.svg';
interface Meeting {
  id: string;
  participant1: { name: string; avatar: string };
  participant2: { name: string; avatar: string };
  duration: string;
  date: string;
  isNew?: boolean;
}

const meetings: Meeting[] = [
  {
    id: '1',
    participant1: { name: 'Kavya P.', avatar: DemoPer },
    participant2: { name: 'Naina Dwivedi', avatar: DemoPer },
    duration: '35:55',
    date: 'Today, 10:30 AM',
    // isNew: true
  },
  {
    id: '2',
    participant1: { name: 'Deepak P.', avatar: DemoPer },
    participant2: { name: 'Angela J.', avatar: DemoPer },
    duration: '42:15',
    date: 'Yesterday, 2:15 PM'
  },
  {
    id: '3',
    participant1: { name: 'Abish S.', avatar: DemoPer },
    participant2: { name: 'John D.', avatar: DemoPer },
    duration: '28:40',
    date: 'Yesterday, 11:45 AM'
  },
  {
    id: '4',
    participant1: { name: 'Abish S.', avatar: DemoPer },
    participant2: { name: 'John D.', avatar: DemoPer },
    duration: '28:40',
    date: 'Yesterday, 11:45 AM'
  }
];

// const Waveform = () => (
//   <div className="waveform-container">
//     {[2, 4, 6, 8, 6, 4, 8, 6, 4, 2].map((height, i) => (
//       <div 
//         key={i} 
//         className="waveform-bar" 
//         style={{ height: `${height}px` }}
//       />
//     ))}
//   </div>
// );

export const MeetingsList = () => {
  return (
    <div className="meetings-list-container">
      <div className="meetings-list-header">
        <div className="row">
          <img src={Mic} alt="mic" />

          <h2 className="meetings-list-title">Meetings</h2>
        </div>
        <button className="meetings-list-view-all" onClick={() => window.location.href = '/meetings'}>View All</button>

      </div>

      <div className="meetings-list">
        {meetings.map((meeting) => (
          <div
            key={meeting.id}
            className={`meeting-item ${meeting.isNew ? 'new' : ''}`}
          >
            {meeting.isNew && (
              <span className="meeting-new-badge">New</span>
            )}

            <div className="meeting-content">
              <div className="meeting-participants">
                <div className="participants-avatars">
                  <div className="participant-avatar-container">
                    <Avatar name={meeting.participant1.name} size="sm" src={meeting.participant1.avatar} />
                    {/* <div className="participant-status"></div> */}
                  </div>
                </div>

                <div className="participants-info">
                  <div className="participants-names">
                    <span className="participant-name primary-blue">{meeting.participant1.name.split(' ')[0]}</span>
                    <img src={Waveform} alt="" />
                  </div>
                  <p className="meeting-date">{meeting.date}</p>
                </div>
                <div className="participants-avatars mx-1">
                  <div className="participant-avatar-container">
                    <Avatar name={meeting.participant2.name} size="sm" src={meeting.participant2.avatar} />
                    {/* <div className="participant-status"></div> */}
                  </div>
                </div>
                <div className="participants-info">
                  <div className="participants-names">
                    <span className="participant-name primary-blue">{meeting.participant2.name.split(' ')[0]}</span>
                    {/* <img src={Waveform} alt="" /> */}
                  </div>
                  {/* <p className="meeting-date">{meeting.date}</p> */}
                </div>

              </div>

              <div className="meeting-actions">
                <button className="meeting-action-button">
                  <img src={Play} alt="play" />
                </button>
                <span className="meeting-duration">{meeting.duration}</span>
                <button className="meeting-transcript-button">
                  Transcript
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};