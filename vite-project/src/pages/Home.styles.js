import styled from "styled-components";
import Calendar from 'react-calendar';

export const StyledCalendar = styled(Calendar)`
    border: none;
    border-radius: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #0f0c01;
    padding: 20px;
    flex: .4;

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

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    justify-content: stretch;
    height: 100vh;
`;