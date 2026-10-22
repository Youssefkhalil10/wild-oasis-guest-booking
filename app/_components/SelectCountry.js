// Let's imagine your colleague already built this component 😃

function SelectCountry({ countries, defaultCountry, name, id, className }) {
  const selectedCountry = countries.find(
    (country) => country.name.toLowerCase() === defaultCountry?.toLowerCase(),
  );

  return (
    <select
      name={name}
      id={id}
      // Here we use a trick to encode BOTH the country name and the flag into the value. Then we split them up again later in the server action
      defaultValue={
        selectedCountry ? `${selectedCountry.name}%${selectedCountry.flag}` : ""
      }
      className={className}
    >
      <option value="">Select country...</option>
      {countries.map((c) => (
        <option key={c.code} value={`${c.name}%${c.flag}`}>
          {c.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
