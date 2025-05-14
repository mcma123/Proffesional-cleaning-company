
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// You would normally store this in an environment variable
const MAPBOX_TOKEN = 'pk.eyJ1IjoibWFwYm94LWRlbW8iLCJhIjoiY2w5OXJpejllMHllZjNxcGlzOTlkYzh0ZCJ9.91Ch-DfH-QNT4OBXghYlxQ';

export const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [tokenInput, setTokenInput] = useState('');
  const [mapToken, setMapToken] = useState(MAPBOX_TOKEN);
  const [showTokenInput, setShowTokenInput] = useState(false);

  // Coordinates for 174 Smit St, Braamfontein, 2001, South Africa
  // These are approximate coordinates - you may need to adjust them
  const lng = 28.0371;
  const lat = -26.1929;
  const zoom = 15;

  useEffect(() => {
    const savedToken = localStorage.getItem('mapbox-token');
    if (savedToken) {
      setMapToken(savedToken);
      setShowTokenInput(false);
    } else if (!MAPBOX_TOKEN || MAPBOX_TOKEN.includes('your-token')) {
      setShowTokenInput(true);
    }
  }, []);

  useEffect(() => {
    if (!mapContainer.current || !mapToken || showTokenInput) return;

    try {
      mapboxgl.accessToken = mapToken;
      
      if (map.current) return; // Initialize map only once
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      // Add marker
      const marker = new mapboxgl.Marker({ color: '#10B981' })
        .setLngLat([lng, lat])
        .setPopup(new mapboxgl.Popup().setHTML('<h3>Professional Cleaning Co</h3><p>174 Smit St. Braamfontein, 2001</p>'))
        .addTo(map.current);
        
      // Open popup by default
      marker.togglePopup();

      return () => {
        map.current?.remove();
      };
    } catch (error) {
      console.error('Map initialization error:', error);
      setShowTokenInput(true);
    }
  }, [lng, lat, zoom, mapToken, showTokenInput]);

  const handleSubmitToken = (e: React.FormEvent) => {
    e.preventDefault();
    if (tokenInput) {
      localStorage.setItem('mapbox-token', tokenInput);
      setMapToken(tokenInput);
      setShowTokenInput(false);
    }
  };

  if (showTokenInput) {
    return (
      <div className="bg-gray-100 p-4 rounded-lg text-center">
        <p className="mb-4 text-sm">To display the map, please enter your Mapbox public token:</p>
        <form onSubmit={handleSubmitToken} className="flex flex-col space-y-2">
          <input
            type="text"
            value={tokenInput}
            onChange={(e) => setTokenInput(e.target.value)}
            placeholder="Enter your Mapbox public token"
            className="px-4 py-2 border rounded"
            required
          />
          <div className="text-xs text-gray-500 mb-2">
            Get your token at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-clean-green-500">mapbox.com</a>
          </div>
          <button 
            type="submit"
            className="bg-clean-green-500 hover:bg-clean-green-600 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }

  return <div ref={mapContainer} className="h-full w-full" />;
};

export default LocationMap;
