export interface IProps {
    data: OrderData
    setView: () => void
}

export interface Order {
    id: string;
    date_modified: {
      date: string;
      timezone_type: number;
      timezone: string;
    };
    order_status: string;
    referral_name: string;
    refund_amount: number;
    coupon: string
  }
  
export interface OrderData {
    [key: string]: Order; 
  }