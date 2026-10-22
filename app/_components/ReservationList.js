"use client";
import { useOptimistic } from "react";
import ReservationCard from "./ReservationCard";
import { deleteBooking } from "../_lib/actions";
const ReservationList = ({ bookings }) => {
  // Use optimistic state to handle updates to the bookings list
  // This allows for immediate UI updates when a booking is deleted or updated
  // Value, updateFunction () => {}
  const [optimisticBooking, optimisticDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) => {
      return curBookings.filter((booking) => booking.id !== bookingId);
    },
  );

  async function handleDelete(bookingId) {
    optimisticDelete(bookingId); // Optimistically update the UI
    await deleteBooking(bookingId);
  }

  return (
    <ul className="space-y-6">
      {optimisticBooking.map((booking) => (
        <ReservationCard
          booking={booking}
          key={booking.id}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ReservationList;
