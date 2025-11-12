import { useEventData } from '../hooks/useEventData';
import PackagesSection from '../components/home/PackagesSection';

function PackagesPage() {
  // Get all data, but only use what's needed for packages
  const { packages, selectedPackage, setSelectedPackage } = useEventData();

  return (
    // We add some padding-top to account for the fixed navbar
    <div className="pt-16">
      <PackagesSection
        packages={packages}
        selectedPackage={selectedPackage}
        setSelectedPackage={setSelectedPackage}
      />
    </div>
  );
}

export default PackagesPage;