import { useEventData } from '../hooks/useEventData';
import ServicesSection from '../components/home/ServicesSection';

function ServicesPage() {
  // Get all data, but only use what's needed for services
  const {
    services,
    filteredServices,
    favorites,
    toggleFavorite,
    filterEventType,
    setFilterEventType,
    // filterBudget, // REMOVED
    // setFilterBudget, // REMOVED
    filterCategories,
    toggleCategory,
  } = useEventData();

  return (
    // We add some padding-top to account for the fixed navbar
    <div className="pt-16"> 
      <ServicesSection
        services={services}
        filteredServices={filteredServices}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        filterEventType={filterEventType}
        setFilterEventType={setFilterEventType}
        // filterBudget={filterBudget} // REMOVED
        // setFilterBudget={setFilterBudget} // REMOVED
        filterCategories={filterCategories}
        toggleCategory={toggleCategory}
      />
    </div>
  );
}

export default ServicesPage;