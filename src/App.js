import React from "react";
import "./App.css";
import Player from "./pages/player/Player";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <p>test coba</p>
        <Player />
      </QueryClientProvider>
    </div>
  )
}

export default App;
