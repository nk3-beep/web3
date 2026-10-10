import { WEEKLY_HOURS } from '../data/bakeryData';

export interface StoreStatus {
  isOpen: boolean;
  isClosingSoon: boolean;
  statusText: string;
  subText: string;
  currentDayName: string;
  todayHoursText: string;
  nextOpenText?: string;
}

export function getStoreStatus(): StoreStatus {
  const now = new Date();
  
  // Format day name in local time
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDayIndex = now.getDay();
  const currentDayName = dayNames[currentDayIndex];

  const todayConfig = WEEKLY_HOURS.find(h => h.day === currentDayName) || WEEKLY_HOURS[0];
  
  const formatTimeStr = (hour: number, min: number) => {
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    const displayMin = min === 0 ? '00' : (min < 10 ? `0${min}` : min);
    return `${displayHour}:${displayMin} ${period}`;
  };

  // If today is a holiday (Sunday)
  if (todayConfig.isClosed) {
    return {
      isOpen: false,
      isClosingSoon: false,
      statusText: "Closed (Holiday)",
      subText: "Sunday is our weekly holiday. Opens Monday at 8:00 AM",
      currentDayName,
      todayHoursText: "Sunday Holiday (Closed)",
      nextOpenText: "Opens Monday at 8:00 AM"
    };
  }

  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const [openHour, openMin] = todayConfig.open.split(':').map(Number);
  const [closeHour, closeMin] = todayConfig.close.split(':').map(Number);

  const openMinutes = openHour * 60 + openMin;
  const closeMinutes = closeHour * 60 + closeMin;

  const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;
  const isClosingSoon = isOpen && (closeMinutes - currentMinutes) <= 45;

  const todayHoursFormatted = `${formatTimeStr(openHour, openMin)} – ${formatTimeStr(closeHour, closeMin)}`;

  if (isOpen) {
    if (isClosingSoon) {
      const minsLeft = closeMinutes - currentMinutes;
      return {
        isOpen: true,
        isClosingSoon: true,
        statusText: "Closing Soon",
        subText: `Closes at ${formatTimeStr(closeHour, closeMin)} (in ${minsLeft} mins)`,
        currentDayName,
        todayHoursText: todayHoursFormatted,
      };
    }
    return {
      isOpen: true,
      isClosingSoon: false,
      statusText: "Open Now",
      subText: `Open today until ${formatTimeStr(closeHour, closeMin)}`,
      currentDayName,
      todayHoursText: todayHoursFormatted,
    };
  }

  // If before opening hours
  if (currentMinutes < openMinutes) {
    return {
      isOpen: false,
      isClosingSoon: false,
      statusText: "Closed Now",
      subText: `Opens this morning at ${formatTimeStr(openHour, openMin)}`,
      currentDayName,
      todayHoursText: todayHoursFormatted,
      nextOpenText: `Opens today at ${formatTimeStr(openHour, openMin)}`
    };
  }

  // After closing hours, find next open day
  if (currentDayIndex === 6) { // Saturday night -> opens Monday
    return {
      isOpen: false,
      isClosingSoon: false,
      statusText: "Closed for the day",
      subText: "Opens Monday at 8:00 AM (Sunday is Holiday)",
      currentDayName,
      todayHoursText: todayHoursFormatted,
      nextOpenText: "Opens Monday at 8:00 AM"
    };
  }

  const nextDayIndex = (currentDayIndex + 1) % 7;
  const nextDayName = dayNames[nextDayIndex];
  const nextDayConfig = WEEKLY_HOURS.find(h => h.day === nextDayName) || WEEKLY_HOURS[0];

  return {
    isOpen: false,
    isClosingSoon: false,
    statusText: "Closed for the day",
    subText: `Opens tomorrow (${nextDayConfig.dayShort}) at 8:00 AM`,
    currentDayName,
    todayHoursText: todayHoursFormatted,
    nextOpenText: `Opens tomorrow at 8:00 AM`
  };
}

