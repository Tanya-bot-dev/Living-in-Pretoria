export default function HouseCard() {
  return (
    <div className="rounded-xl shadow-md p-4 bg-white max-w-xs">
      <img
        className="rounded mb-2"
        src="https://source.unsplash.com/featured/?house"
        alt="house"
      />
      <h2 className="font-bold text-lg">R 5 000 / month</h2>
      <p className="text-sm text-gray-600">Hatfield, Pretoria</p>
    </div>
  );
}
