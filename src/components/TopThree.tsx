const TopThree = ({ topThree }: { topThree: { name: string; score: number }[] }) => {
    return (
      <div className="flex justify-center items-center gap-8 mb-6">
        {topThree.length > 1 && (
          <div className="flex flex-col items-center">
            <img src="public/assets/tism2.jpg" alt={topThree[1]?.name} className="w-16 h-16 rounded-3xl" />
            <span>{topThree[1]?.name}</span>
          </div>
        )}
        {topThree.length > 0 && (
          <div className="flex flex-col items-center">
            <img src="public/assets/tism1.jpg" alt={topThree[0]?.name} className="w-20 h-20 rounded-3xl" />
            <span>{topThree[0]?.name}</span>
          </div>
        )}
        {topThree.length > 2 && (
          <div className="flex flex-col items-center">
            <img src="public/assets/tism3.jpg" alt={topThree[2]?.name} className="w-16 h-16 rounded-3xl" />
            <span>{topThree[2]?.name}</span>
          </div>
        )}
      </div>
    );
  };
  
  export default TopThree;
  