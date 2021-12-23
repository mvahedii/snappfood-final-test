export interface VendorsApiResults {
  status: true;
  data: {
    count: number;
    open_count: number;
    finalResult: {
      type: string;
      data: Restaurant | string;
    }[];
  };
}

export interface Restaurant {
  id: number;
  vendorCode: string;
  noOrder: boolean;
  title: string;
  description: string;
  rate: number;
  rating: number;
  logo: string;
  defLogo: string;
  taxEnabled: boolean;
  taxIncluded: boolean;
  taxEnabledInProducts: boolean;
  taxEnabledInPackaging: boolean;
  taxEnabledInDeliveryFee: boolean;
  tax: number;
  serviceFee: number;
  deliveryArea: string;
  discount: number;
  isOpen: boolean;
  minDeliveryFee: number;
  maxDeliveryFee: number;
  deliveryTime: number;
  paymentTypes: number[];
  schedules: [
    {
      type: number;
      weekday: number;
      allDay: boolean;
      startHour: string;
      stopHour: string;
    },
    {
      type: number;
      weekday: number;
      allDay: boolean;
      startHour: string;
      stopHour: string;
    },
    {
      type: number;
      weekday: number;
      allDay: boolean;
      startHour: string;
      stopHour: string;
    },
    {
      type: number;
      weekday: number;
      allDay: boolean;
      startHour: string;
      stopHour: string;
    },
    {
      type: number;
      weekday: number;
      allDay: boolean;
      startHour: string;
      stopHour: string;
    },
    {
      type: number;
      weekday: number;
      allDay: boolean;
      startHour: string;
      stopHour: string;
    },
    {
      type: number;
      weekday: number;
      allDay: boolean;
      startHour: string;
      stopHour: string;
    },
  ];
  minOrder: number;
  address: string;
  phone: string;
  website: string;
  status: number;
  lat: number;
  lon: number;
  restaurantClass: string;
  foodTypes: [];
  restaurantTypes: [];
  isFavorite: boolean;
  priority: number;
  city: string;
  area: string;
  commentCount: number;
  recommendedFor: string;
  establishment: string;
  mostPopularItems: string;
  costsForTwo: number;
  onlineOrder: boolean;
  voteCount: boolean;
  discountType: null;
  menuUrl: string;
  discountValue: number;
  discountForAll: boolean;
  containerFee: number;
  deliveryGuarantee: boolean;
  badges: [];
  discountStartHour1: string;
  discountStopHour1: string;
  discountStartHour2: string;
  discountStopHour2: string;
  discountValueForView: number;
  coverPath: string;
  cuisinesArray: [
    {
      id: number;
      title: string;
    },
    {
      id: number;
      title: string;
    },
    {
      id: number;
      title: string;
    },
    {
      id: number;
      title: string;
    },
  ];
  preOrderEnabled: boolean;
  vendorType: string;
  childType: string;
  budgetClass: string;
  vendorTypeTitle: string;
  isZFExpress: boolean;
  deliveryFee: number;
  backgroundImage: string;
  backgroundImageCustom: string;
  has_coupon: boolean;
  coupon_count: number;
  best_coupon: string;
  userImage: [
    {
      id: number;
      description: string;
      fileName: string;
      thumbNailSource: string;
      likeCount: number;
      commentCount: number;
      timeDifference: number;
      imageType: string;
      userType: string;
    },
    {
      id: number;
      description: string;
      fileName: string;
      thumbNailSource: string;
      likeCount: number;
      commentCount: number;
      timeDifference: number;
      imageType: string;
      userType: string;
    },
    {
      id: number;
      description: string;
      fileName: string;
      thumbNailSource: string;
      likeCount: number;
      commentCount: number;
      timeDifference: number;
      imageType: string;
      userType: string;
    },
    {
      id: number;
      description: string;
      fileName: string;
      thumbNailSource: string;
      likeCount: number;
      commentCount: number;
      timeDifference: number;
      imageType: string;
      userType: string;
    },
  ];
  menuImage: [];
  countReview: number;
  countOfUserImages: number;
  deliveryFeeDiscount: number;
  trendingScore: number;
  delay: string;
  deliver: boolean;
  eta: boolean;
  min_eta: boolean;
  max_eta: boolean;
  open_at_eta: boolean;
  action: string;
  has_delay: boolean;
  delay_time: number;
  total_time: number;
  bid: boolean;
  superTypeAlias: string;
  is_food_party: boolean;
  is_market_party: boolean;
  click_id: null;
  is_ecommerce: boolean;
  is_economical: boolean;
  is_grocery_vip: boolean;
  is_grocery_returnable: boolean;
  is_grocery_economic: boolean;
}
