
const ServicesCard = ({ title, description }: {
  title: string;
  description: string;
}) => {
  return (
    <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:">
      <h3 className="font-semibold text-3xl">{title}</h3>
      <p className="mt-3 text-lg">{description}</p>
    </div>
  );
};

export default ServicesCard;
