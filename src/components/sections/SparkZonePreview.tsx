import React, { useState } from 'react';
import { Calendar, Clock, Check, Gamepad2, UserCheck } from 'lucide-react';

interface Station {
  id: string;
  name: string;
  specs: string;
  status: 'Available' | 'Booked';
  price: string;
}

export const SparkZonePreview: React.FC = () => {
  const [stations, setStations] = useState<Station[]>([
    { id: 'st-01', name: 'Station 01 — RTX 4080 Rig', specs: 'i9 13900K / 32GB RAM / 240Hz', status: 'Available', price: '$8/hr' },
    { id: 'st-02', name: 'Station 02 — PS5 Pro Arena', specs: '4K OLED 120Hz / DualSense Edge', status: 'Booked', price: '$6/hr' },
    { id: 'st-03', name: 'Station 03 — RTX 4090 Monster', specs: 'Ryzen 9 7950X / 64GB RAM / 360Hz', status: 'Available', price: '$10/hr' },
    { id: 'st-04', name: 'Station 04 — VR Racing Pod', specs: 'Direct Drive Wheel / Motion Rig', status: 'Available', price: '$12/hr' },
  ]);

  const [selectedStationId, setSelectedStationId] = useState<string>('st-01');
  const [selectedDate, setSelectedDate] = useState<string>('2026-09-02');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('18:00 - 20:00');
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);

  const handleBooking = () => {
    setStations((prev) =>
      prev.map((s) => (s.id === selectedStationId ? { ...s, status: 'Booked' } : s))
    );
    setBookingConfirmed(true);
    setTimeout(() => {
      setBookingConfirmed(false);
    }, 4000);
  };

  const selectedStation = stations.find((s) => s.id === selectedStationId);

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-md relative overflow-hidden">
      
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 flex-wrap gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-teal-100 border border-teal-200 flex items-center justify-center text-teal-800 font-bold font-mono text-xs">
            SZ
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900 tracking-wider flex items-center gap-2">
              SPARKZONE GAMING SYSTEM
              <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-teal-100 text-teal-800 border border-teal-200 font-bold">
                DJANGO BACKEND DEMO
              </span>
            </h4>
            <p className="text-[10px] font-mono text-slate-500 font-semibold">
              REAL-TIME STATION AVAILABILITY & REST API SIMULATOR
            </p>
          </div>
        </div>

        <div className="px-2.5 py-1 rounded bg-teal-50 border border-teal-200 text-teal-800 text-[10px] font-mono font-bold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-pulse"></span>
          <span>INTERACTIVE PREVIEW SIMULATOR</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-4">
        
        {/* Station Availability Grid */}
        <div className="md:col-span-7 space-y-3">
          <div className="text-xs font-mono text-slate-700 font-bold tracking-wider flex items-center justify-between">
            <span>GAMING STATIONS GRID</span>
            <span className="text-emerald-700 text-[10px] font-bold">LIVE STATUS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {stations.map((st) => {
              const isSelected = selectedStationId === st.id;
              const isAvailable = st.status === 'Available';

              return (
                <button
                  key={st.id}
                  onClick={() => isAvailable && setSelectedStationId(st.id)}
                  disabled={!isAvailable}
                  className={`p-3 rounded-xl border text-left transition-all duration-150 ${
                    isSelected
                      ? 'bg-teal-50 border-teal-500 shadow-xs'
                      : isAvailable
                      ? 'bg-slate-50 border-slate-200 hover:border-teal-300'
                      : 'bg-slate-100 border-slate-200 opacity-60 cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-slate-900 font-mono">
                      {st.name.split(' — ')[0]}
                    </span>
                    <span
                      className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded ${
                        isAvailable
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                          : 'bg-rose-100 text-rose-800 border border-rose-200'
                      }`}
                    >
                      {st.status}
                    </span>
                  </div>

                  <p className="text-[10px] text-slate-500 font-mono line-clamp-1 mb-2 font-medium">
                    {st.specs}
                  </p>

                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-600 pt-1 border-t border-slate-200">
                    <span>RATE</span>
                    <span className="text-teal-700 font-bold">{st.price}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Booking Form Simulator */}
        <div className="md:col-span-5 bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-between space-y-3">
          
          <div>
            <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
              <span className="text-xs font-mono font-bold text-slate-900 flex items-center gap-1.5">
                <Gamepad2 size={14} className="text-teal-600" />
                <span>BOOKING SIMULATOR</span>
              </span>
              <span className="text-[10px] font-mono text-teal-700 font-bold">REST API / POST</span>
            </div>

            <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs font-mono text-slate-800 mb-3">
              <div className="text-[10px] text-slate-500 font-semibold">SELECTED TARGET:</div>
              <div className="font-bold text-teal-800">{selectedStation?.name}</div>
            </div>

            <div className="space-y-1 mb-2">
              <label className="text-[10px] font-mono text-slate-600 font-semibold flex items-center gap-1">
                <Calendar size={12} className="text-teal-600" />
                <span>DATE SELECTOR</span>
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-mono text-slate-900 focus:outline-none focus:border-teal-600"
              />
            </div>

            <div className="space-y-1 mb-3">
              <label className="text-[10px] font-mono text-slate-600 font-semibold flex items-center gap-1">
                <Clock size={12} className="text-teal-600" />
                <span>TIME SLOT</span>
              </label>
              <select
                value={selectedTimeSlot}
                onChange={(e) => setSelectedTimeSlot(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-mono text-slate-900 focus:outline-none focus:border-teal-600"
              >
                <option value="16:00 - 18:00">16:00 - 18:00 (Evening)</option>
                <option value="18:00 - 20:00">18:00 - 20:00 (Peak Slot)</option>
                <option value="20:00 - 22:00">20:00 - 22:00 (Night Slot)</option>
              </select>
            </div>

            <button
              onClick={handleBooking}
              disabled={selectedStation?.status !== 'Available'}
              className={`w-full py-2.5 rounded-lg text-xs font-bold font-mono transition-all flex items-center justify-center gap-1.5 ${
                selectedStation?.status === 'Available'
                  ? 'bg-teal-600 hover:bg-teal-700 text-white shadow-xs'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <UserCheck size={14} />
              <span>SIMULATE BOOKING REQUEST</span>
            </button>

            {bookingConfirmed && (
              <div className="p-2.5 rounded-lg bg-emerald-100 border border-emerald-300 text-emerald-900 text-[10px] font-mono flex items-center gap-1.5 animate-in fade-in mt-2 font-bold">
                <Check size={14} className="text-emerald-700" />
                <span>JSON API 200 OK — Booking Created!</span>
              </div>
            )}
          </div>

          <p className="text-[9px] font-mono text-slate-500 italic text-center font-semibold">
            * Portfolio visualization reflecting Django model/views architecture.
          </p>

        </div>

      </div>

    </div>
  );
};
