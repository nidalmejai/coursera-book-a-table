import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './BookingForm.css';

interface BookingFormData {
  name: string;
  prename: string;
  year: string;
  month: string;
  date: string;
  time: string;
  numberOfDinners: string;
}

const schema = yup.object({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  prename: yup.string().required('Prename is required').min(2, 'Prename must be at least 2 characters'),
  year: yup.string().required('Year is required'),
  month: yup.string().required('Month is required'),
  date: yup.string().required('Date is required'),
  time: yup.string().required('Time is required'),
  numberOfDinners: yup.string().required('Number of dinners is required')
}).required();

const BookingForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<BookingFormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: BookingFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Booking submitted:', data);
      alert('Table booked successfully!');
      reset();
    } catch (error) {
      console.error('Booking failed:', error);
      alert('Booking failed. Please try again.');
    }
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear + i);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);
  const times = [
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'
  ];
  const dinnerOptions = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="booking-form-container">
      <h2 className="booking-title">Book A Table</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="booking-form" noValidate>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              id="name"
              type="text"
              {...register('name')}
              className={`form-input ${errors.name ? 'error' : ''}`}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <span id="name-error" className="error-message" role="alert">
                {errors.name.message}
              </span>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="prename" className="form-label">Prename</label>
            <input
              id="prename"
              type="text"
              {...register('prename')}
              className={`form-input ${errors.prename ? 'error' : ''}`}
              aria-describedby={errors.prename ? 'prename-error' : undefined}
            />
            {errors.prename && (
              <span id="prename-error" className="error-message" role="alert">
                {errors.prename.message}
              </span>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="year" className="form-label">Select Year</label>
            <select
              id="year"
              {...register('year')}
              className={`form-select ${errors.year ? 'error' : ''}`}
              aria-describedby={errors.year ? 'year-error' : undefined}
            >
              <option value="">Select Year</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            {errors.year && (
              <span id="year-error" className="error-message" role="alert">
                {errors.year.message}
              </span>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="month" className="form-label">Select Month</label>
            <select
              id="month"
              {...register('month')}
              className={`form-select ${errors.month ? 'error' : ''}`}
              aria-describedby={errors.month ? 'month-error' : undefined}
            >
              <option value="">Select Month</option>
              {months.map((month, index) => (
                <option key={index} value={month}>{month}</option>
              ))}
            </select>
            {errors.month && (
              <span id="month-error" className="error-message" role="alert">
                {errors.month.message}
              </span>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="date" className="form-label">Select Date</label>
            <select
              id="date"
              {...register('date')}
              className={`form-select ${errors.date ? 'error' : ''}`}
              aria-describedby={errors.date ? 'date-error' : undefined}
            >
              <option value="">Select Date</option>
              {dates.map(date => (
                <option key={date} value={date}>{date}</option>
              ))}
            </select>
            {errors.date && (
              <span id="date-error" className="error-message" role="alert">
                {errors.date.message}
              </span>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="time" className="form-label">Time</label>
            <select
              id="time"
              {...register('time')}
              className={`form-select ${errors.time ? 'error' : ''}`}
              aria-describedby={errors.time ? 'time-error' : undefined}
            >
              <option value="">Select Time</option>
              {times.map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
            {errors.time && (
              <span id="time-error" className="error-message" role="alert">
                {errors.time.message}
              </span>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="numberOfDinners" className="form-label">Number of Dinners</label>
            <select
              id="numberOfDinners"
              {...register('numberOfDinners')}
              className={`form-select ${errors.numberOfDinners ? 'error' : ''}`}
              aria-describedby={errors.numberOfDinners ? 'dinners-error' : undefined}
            >
              <option value="">Select Number</option>
              {dinnerOptions.map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
            {errors.numberOfDinners && (
              <span id="dinners-error" className="error-message" role="alert">
                {errors.numberOfDinners.message}
              </span>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="book-now-btn"
          disabled={isSubmitting}
          aria-describedby="submit-status"
        >
          {isSubmitting ? 'Booking...' : 'Book Now'}
        </button>
        <div id="submit-status" className="sr-only" aria-live="polite">
          {isSubmitting ? 'Submitting booking form...' : ''}
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
