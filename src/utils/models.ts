export type Category =
  | 'restaurant'
  | 'alimentation'
  | 'loisirs'
  | 'shopping'
  | 'divers';

export interface Debt {
  summary: string;
  value: number;
}

export interface Distribution {
  percentage: number;
  key: Category;
  svg?: {
    fill: string;
  };
  value: number;
}

export interface Expense {
  id: string;
  category: Category;
  cost: number;
  date: string;
  details: string;
  type: TypeOfExpense;
  whoPaid: string;
  sharedWith?: string;
}

export interface ExpensesSortedByMonth {
  [key: string]: Expense[];
}

export interface Friend {
  id: string;
  name: string;
  avatar: string;
}

export interface Group {
  [key: string]: boolean;
}

export interface MonthTotal {
  month: string;
  shared: number;
  personal: number;
}

export interface ScreenProps {
  user?: User;
  expenses?: Expense[];
  selectedMonth: string;
  disconnect(): void;
  // double check if we can better specify handleMonthSelection type
  handleMonthSelection(): void;
}

export type TypeOfExpense = 'personnelle' | 'partagée' | 'avance';

export interface User {
  id?: string;
  name?: string;
  avatar?: string;
  friend?: Friend;
  group?: Group;
}

export interface UserWithFriend extends User {
  friend: Friend;
  group: Group;
}
