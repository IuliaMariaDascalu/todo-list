import styled from "styled-components";
import Calendar from 'react-calendar';

export const StyledCalendar = styled(Calendar)`
    border: none;
    border-radius: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #0f0c01;
    padding: 20px;
    flex: .3;

    .react-calendar__tile {
        background: #0f0c01;
        color: white;
        border-radius: 5px;
        transition: background-color 0.3s;
        margin: 5px 10px;
    }

    .react-calendar__tile:hover {
        color: #f7f05e;
    }

    .react-calendar__tile--active {
        color: #faef0f;
        font-weight: bold;
    }

    .react-calendar__navigation__label,
    .react-calendar__navigation__arrow {
        background-color: #0f0c01;
        color: white;
    }

    .react-calendar__month-view__weekdays__weekday {
        color: white;
        font-weight: bold;
        padding: 10px 0;
    }
`;

export const TopRow = styled.div`
  display: flex;
  gap: 0.75rem;
  flex: 1;
  min-height: 0;
  max-height: 38%;
  overflow: hidden;
`;

export const BottomRow = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`;
