import CalendarLocale from 'rc-calendar/lib/locale/pa_IN';
import TimePickerLocale from '../../time-picker/locale/pa_IN';

// Merge into a locale object
const locale = {
  lang: {
    placeholder: 'ਮਿਤੀ ਚੁਣੋ',
    rangePlaceholder: ['ਮਿਤੀ ਸ਼ੁਰੂ', 'ਮਿਤੀ ਅੰਤ'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

export default locale;
