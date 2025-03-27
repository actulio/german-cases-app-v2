import {
  ArrowRight,
  Bell,
  ChevronDown,
  Edit,
  Languages,
  LogOut,
  LucideIcon,
  Palette,
  RotateCcw,
  SunMoon,
} from 'lucide-react-native';
import { cssInterop } from 'nativewind';

export const makeNativeWindIcon = (Icon: LucideIcon) => {
  return cssInterop(Icon, {
    className: {
      target: 'style',
      nativeStyleToProp: { height: true, width: true },
    },
  }) as LucideIcon;
};

export const Icons = {
  LogOut: makeNativeWindIcon(LogOut),
  ArrowRight: makeNativeWindIcon(ArrowRight),
  Bell: makeNativeWindIcon(Bell),
  Edit: makeNativeWindIcon(Edit),
  Palette: makeNativeWindIcon(Palette),
  RotateCcw: makeNativeWindIcon(RotateCcw),
  SunMoon: makeNativeWindIcon(SunMoon),
  Languages: makeNativeWindIcon(Languages),
  ChevronDown: makeNativeWindIcon(ChevronDown),
};
