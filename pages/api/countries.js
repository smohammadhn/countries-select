export default function handler(req, res) {
  const options = [
    {
      name: "United States",
      value: "76399",
      symbol: "$",
      image: "US.jpeg",
    },
    {
      name: "Netherlands",
      value: "69577",
      symbol: "$",
      image: "NL.png",
    },
  ];

  res.status(200).json(options);
}
