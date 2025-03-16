'use client'
// import Image from "next/image";

import logo from './assets/logo.png'
import CarouselComponent from "./components/CarouselComponent";
import Navbar from "./components/Navbar";
import TabsCarousel from "./components/TabsCarousel";
import usePopularMovies from "./hooks/usePopularMovies";
import useTrendingMovies from "./hooks/useTrendingMovies";
import { useEffect, useState } from "react";
import useTVSeries from "./hooks/useTVSeries";
import useMovieVideo from "./hooks/useMovieVideo";
import Trailer from "./components/Trailer";
import AboutContact from "./components/AboutContact/AboutContact";
import useTVSeriesVideo from './hooks/useTVSeriesVideo';
import Footer from './components/Footer';
import CarouselSkeleton from './components/Skeleton/CarouselSkeleton';
import Sidebar from './components/Sidebar';

export default function Home() {
  const menus = ["Home", "Trendings", "Movies", "TV Series"]
  const [activeNav, setActiveNav] = useState("home")
  const handleActiveNav = (nav) => setActiveNav(nav)

  const [sidebar, setSidebar] = useState(false)
  const onSidebar = () => setSidebar(true)
  const offSidebar = () => setSidebar(false)

  const [tabValue, setTabValue] = useState('trendings')
  const [ trailerId, setTrailerId ] = useState(0)
  

  const { fetchTrendingMovies, moviesTrendings, loadingTrendings } = useTrendingMovies()
  const { fetchPopularMovies, popularMovies } = usePopularMovies()
  const { fetchTVSeries, tvSeries } = useTVSeries()
  const { fetchMovieVideo, movieVideo } = useMovieVideo()
  const { fetchSeriesVideo, seriesVideo } = useTVSeriesVideo()

  
  const movies_2025 = moviesTrendings.filter((movie) => {
      const releaseYear = new Date(movie.release_date).getFullYear()
      return releaseYear === 2025
  }) 

    let moviesTab = []
    const handleTab = (tab) => {
      setTabValue(tab)
    }  
    
    if (tabValue == "trendings") moviesTab = moviesTrendings 
    else if (tabValue == "popular") moviesTab = popularMovies
    else if (tabValue == "tv-series") moviesTab = tvSeries

    // setTrailerId(moviesTab[0])
    const handleTrailerId = (id) => setTrailerId(id)

    useEffect(() => { 
        fetchTrendingMovies() 
        fetchPopularMovies()
        fetchTVSeries()
        fetchMovieVideo(762509)
        fetchTVSeries(0)
    }, [])
    
    useEffect(() => {
      fetchMovieVideo(trailerId)
      fetchSeriesVideo(trailerId)
    }, [trailerId])

    // console.log("trendings", moviesTrendings)
    // console.log("popular", popularMovies)
    // console.log("TV Series", tvSeries)
    // console.log("video", movieVideo)
    // console.log("loading", loadingTrendings)
    // console.log("sidebar", sidebar)

  return (
      <>

        <Navbar logo={logo} menus={menus} activeNav={activeNav} handleActiveNav={handleActiveNav} 
        onSidebar={onSidebar} />
        {sidebar && <Sidebar menus={menus} activeNav={activeNav} offSidebar={offSidebar} /> }
        
        {loadingTrendings ? <CarouselSkeleton /> : <CarouselComponent movies={movies_2025}/>  }
        
        <TabsCarousel movies={moviesTab} handleTab={handleTab} tabValue={tabValue} handleTrailerId={handleTrailerId} />

        <Trailer movieVideo={tabValue == "tv-series" ? seriesVideo : movieVideo}/>
        <AboutContact />
        <Footer logo={logo} menus={menus} activeNav={activeNav} handleActiveNav={handleActiveNav} />

      </>    

      
    
  );
}


