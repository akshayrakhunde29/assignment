import React, { useState } from "react";
import { Search } from "lucide-react";

const LocationSelector = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([
    {
      country: "India",
      value: "India",
      checked: false,
      states: [
        {
          label: "Maharashtra",
          value: "Maharashtra",
          checked: false,
          cities: [
            { label: "Mumbai", value: "Mumbai", checked: false },
            { label: "Pune", value: "Pune", checked: false },
            { label: "Nagpur", value: "Nagpur", checked: false },
          ],
        },
        {
          label: "Karnataka",
          value: "Karnataka",
          checked: false,
          cities: [
            { label: "Bangalore", value: "Bangalore", checked: false },
            { label: "Mysore", value: "Mysore", checked: false },
          ],
        },
        {
          label: "Delhi",
          value: "Delhi",
          checked: false,
          cities: [
            { label: "New Delhi", value: "New Delhi", checked: false },
            { label: "Old Delhi", value: "Old Delhi", checked: false },
          ],
        },
      ],
    },
    {
      country: "United States",
      value: "United States",
      checked: false,
      states: [
        {
          label: "California",
          value: "California",
          checked: false,
          cities: [
            { label: "Los Angeles", value: "Los Angeles", checked: false },
            { label: "San Francisco", value: "San Francisco", checked: false },
            { label: "San Diego", value: "San Diego", checked: false },
          ],
        },
        {
          label: "New York",
          value: "New York",
          checked: false,
          cities: [
            { label: "New York City", value: "New York City", checked: false },
            { label: "Buffalo", value: "Buffalo", checked: false },
          ],
        },
        {
          label: "Texas",
          value: "Texas",
          checked: false,
          cities: [
            { label: "Houston", value: "Houston", checked: false },
            { label: "Dallas", value: "Dallas", checked: false },
            { label: "Austin", value: "Austin", checked: false },
          ],
        },
      ],
    },
    {
      country: "Canada",
      value: "Canada",
      checked: false,
      states: [
        {
          label: "Ontario",
          value: "Ontario",
          checked: false,
          cities: [
            { label: "Toronto", value: "Toronto", checked: false },
            { label: "Ottawa", value: "Ottawa", checked: false },
          ],
        },
        {
          label: "Quebec",
          value: "Quebec",
          checked: false,
          cities: [
            { label: "Montreal", value: "Montreal", checked: false },
            { label: "Quebec City", value: "Quebec City", checked: false },
          ],
        },
      ],
    },
    {
      country: "Australia",
      value: "Australia",
      checked: false,
      states: [
        {
          label: "New South Wales",
          value: "New South Wales",
          checked: false,
          cities: [
            { label: "Sydney", value: "Sydney", checked: false },
            { label: "Newcastle", value: "Newcastle", checked: false },
          ],
        },
        {
          label: "Victoria",
          value: "Victoria",
          checked: false,
          cities: [
            { label: "Melbourne", value: "Melbourne", checked: false },
            { label: "Geelong", value: "Geelong", checked: false },
          ],
        },
      ],
    },
    {
      country: "United Kingdom",
      value: "United Kingdom",
      checked: false,
      states: [
        {
          label: "England",
          value: "England",
          checked: false,
          cities: [
            { label: "London", value: "London", checked: false },
            { label: "Manchester", value: "Manchester", checked: false },
            { label: "Birmingham", value: "Birmingham", checked: false },
          ],
        },
        {
          label: "Scotland",
          value: "Scotland",
          checked: false,
          cities: [
            { label: "Edinburgh", value: "Edinburgh", checked: false },
            { label: "Glasgow", value: "Glasgow", checked: false },
          ],
        },
      ],
    },
    {
      country: "Germany",
      value: "Germany",
      checked: false,
      states: [
        {
          label: "Bavaria",
          value: "Bavaria",
          checked: false,
          cities: [
            { label: "Munich", value: "Munich", checked: false },
            { label: "Nuremberg", value: "Nuremberg", checked: false },
          ],
        },
        {
          label: "Berlin",
          value: "Berlin",
          checked: false,
          cities: [
            { label: "Berlin City", value: "Berlin City", checked: false },
          ],
        },
      ],
    },
    {
      country: "France",
      value: "France",
      checked: false,
      states: [
        {
          label: "Ile-de-France",
          value: "Ile-de-France",
          checked: false,
          cities: [
            { label: "Paris", value: "Paris", checked: false },
            { label: "Versailles", value: "Versailles", checked: false },
          ],
        },
        {
          label: "Provence",
          value: "Provence",
          checked: false,
          cities: [
            { label: "Marseille", value: "Marseille", checked: false },
            { label: "Nice", value: "Nice", checked: false },
          ],
        },
      ],
    },
    {
      country: "Japan",
      value: "Japan",
      checked: false,
      states: [
        {
          label: "Tokyo Prefecture",
          value: "Tokyo Prefecture",
          checked: false,
          cities: [
            { label: "Tokyo", value: "Tokyo", checked: false },
            { label: "Shibuya", value: "Shibuya", checked: false },
          ],
        },
        {
          label: "Osaka Prefecture",
          value: "Osaka Prefecture",
          checked: false,
          cities: [
            { label: "Osaka", value: "Osaka", checked: false },
            { label: "Sakai", value: "Sakai", checked: false },
          ],
        },
      ],
    },
    {
      country: "Brazil",
      value: "Brazil",
      checked: false,
      states: [
        {
          label: "São Paulo",
          value: "São Paulo",
          checked: false,
          cities: [
            {
              label: "São Paulo City",
              value: "São Paulo City",
              checked: false,
            },
            { label: "Campinas", value: "Campinas", checked: false },
          ],
        },
        {
          label: "Rio de Janeiro",
          value: "Rio de Janeiro",
          checked: false,
          cities: [
            {
              label: "Rio de Janeiro City",
              value: "Rio de Janeiro City",
              checked: false,
            },
            { label: "Niterói", value: "Niterói", checked: false },
          ],
        },
      ],
    },
    {
      country: "South Africa",
      value: "South Africa",
      checked: false,
      states: [
        {
          label: "Gauteng",
          value: "Gauteng",
          checked: false,
          cities: [
            { label: "Johannesburg", value: "Johannesburg", checked: false },
            { label: "Pretoria", value: "Pretoria", checked: false },
          ],
        },
        {
          label: "Western Cape",
          value: "Western Cape",
          checked: false,
          cities: [
            { label: "Cape Town", value: "Cape Town", checked: false },
            { label: "Stellenbosch", value: "Stellenbosch", checked: false },
          ],
        },
      ],
    },
  ]);

  // Recursive function to update any level of nesting
  const updateNestedItem = (items, path, checked) => {
    return items.map((item, index) => {
      if (index === path[0]) {
        if (path.length === 1) {
          // Update current item and all its children recursively
          const updateAllChildren = (obj) => {
            const updated = { ...obj, checked };
            if (obj.states) {
              updated.states = obj.states.map(updateAllChildren);
            }
            if (obj.cities) {
              updated.cities = obj.cities.map(updateAllChildren);
            }
            return updated;
          };
          return updateAllChildren(item);
        } else {
          // Recurse to next level
          const updatedItem = { ...item };

          if (item.states && path.length > 1) {
            updatedItem.states = updateNestedItem(
              item.states,
              path.slice(1),
              checked
            );

            // Update parent state based on children
            const allChecked = updatedItem.states.every(
              (state) =>
                state.checked &&
                (!state.cities || state.cities.every((city) => city.checked))
            );
            const someChecked = updatedItem.states.some(
              (state) =>
                state.checked ||
                (state.cities && state.cities.some((city) => city.checked))
            );

            updatedItem.checked = allChecked;
            updatedItem.indeterminate = someChecked && !allChecked;
          }

          if (item.cities && path.length > 1) {
            updatedItem.cities = updateNestedItem(
              item.cities,
              path.slice(1),
              checked
            );

            // Update parent based on cities
            const allCitiesChecked = updatedItem.cities.every(
              (city) => city.checked
            );
            const someCitiesChecked = updatedItem.cities.some(
              (city) => city.checked
            );

            updatedItem.checked = allCitiesChecked;
            updatedItem.indeterminate = someCitiesChecked && !allCitiesChecked;
          }

          return updatedItem;
        }
      }
      return item;
    });
  };

  const handleItemCheck = (path) => {
    const getItemAtPath = (items, path) => {
      let current = items[path[0]];
      for (let i = 1; i < path.length; i++) {
        if (current.states) current = current.states[path[i]];
        else if (current.cities) current = current.cities[path[i]];
      }
      return current;
    };

    const currentItem = getItemAtPath(data, path);
    setData((prev) => updateNestedItem(prev, path, !currentItem.checked));
  };

  // Recursive search filter
  const filterItems = (items, searchTerm, level = 0) => {
    if (!searchTerm) return items;

    return items
      .map((item) => {
        const itemName = item.country || item.label;
        const matchesItem = itemName
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

        let filteredChildren = [];

        if (item.states) {
          filteredChildren = filterItems(item.states, searchTerm, level + 1);
        } else if (item.cities) {
          filteredChildren = filterItems(item.cities, searchTerm, level + 1);
        }

        if (matchesItem || filteredChildren.length > 0) {
          const result = { ...item };
          if (item.states)
            result.states =
              filteredChildren.length > 0 ? filteredChildren : item.states;
          if (item.cities)
            result.cities =
              filteredChildren.length > 0 ? filteredChildren : item.cities;
          return result;
        }
        return null;
      })
      .filter(Boolean);
  };

  const filteredData = filterItems(data, searchTerm);

  // Reusable item component for any level
  const LocationItem = ({ item, level = 0, path = [] }) => {
    const currentPath = [...path];
    const indentClass = level === 0 ? "" : level === 1 ? "pl-6" : "pl-12";
    const textClass =
      level === 0
        ? "font-medium text-gray-900"
        : level === 1
        ? "font-normal text-gray-800"
        : "text-gray-700";

    return (
      <div>
        <div
          className={`flex items-center py-2 px-3 hover:bg-gray-50 ${indentClass}`}
        >
          <label className="flex items-center cursor-pointer flex-1">
            <input
              type="checkbox"
              checked={item.checked}
              ref={(el) => {
                if (el) el.indeterminate = item.indeterminate;
              }}
              onChange={() => handleItemCheck(currentPath)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className={`ml-3 text-sm ${textClass}`}>
              {item.country || item.label}
            </span>
          </label>
        </div>

        {/* Render children recursively */}
        <div style={{ marginLeft: "20px" }}>
          {item.states &&
            item.states.map((state, stateIndex) => (
              <LocationItem
                key={state.value}
                item={state}
                level={level + 1}
                path={[...currentPath, stateIndex]}
              />
            ))}
        </div>
        <div style={{ marginLeft: "20px" }}>
          {item.cities &&
            item.cities.map((city, cityIndex) => (
              <LocationItem
                key={city.value}
                item={city}
                level={level + 1}
                path={[...currentPath, cityIndex]}
              />
            ))}
        </div>
      </div>
    );
  };

  // Count all selected items recursively
  const countSelected = (items) => {
    return items.reduce((total, item) => {
      let count = 0;
      if (item.cities) {
        count += item.cities.filter((city) => city.checked).length;
      } else if (item.checked && !item.states && !item.cities) {
        count += 1;
      }

      if (item.states) {
        count += countSelected(item.states);
      }

      return total + count;
    }, 0);
  };

  // Get selected items with full path
  const getSelectedItems = (items, parentPath = []) => {
    const selected = [];

    items.forEach((item, index) => {
      const currentPath = [...parentPath, item.country || item.label];

      if (item.cities) {
        item.cities.forEach((city) => {
          if (city.checked) {
            selected.push({
              name: city.label,
              fullPath: [...currentPath, city.label],
            });
          }
        });
      } else if (item.checked && !item.states) {
        selected.push({
          name: item.label,
          fullPath: currentPath,
        });
      }

      if (item.states) {
        selected.push(...getSelectedItems(item.states, currentPath));
      }
    });

    return selected;
  };

  const selectedItems = getSelectedItems(filteredData);

  return (
    <div className="w-full max-w-lg mx-auto bg-white border border-gray-200 rounded-lg shadow-sm">
      {/* Search Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search countries, states, or cities"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Hierarchical Location List */}
      <div className="max-h-96 overflow-y-auto">
        {filteredData.map((country, countryIndex) => (
          <LocationItem
            key={country.value}
            item={country}
            level={0}
            path={[countryIndex]}
          />
        ))}
      </div>

      {/* Selection Summary */}
      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <div className="text-xs text-gray-600 mb-2">
          Selected: {countSelected(data)} cities
        </div>

        {/* Show selected items with full path */}
        <div className="space-y-1">
          {selectedItems.slice(0, 5).map((item, index) => (
            <span
              key={index}
              className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-1 mb-1"
            >
              {item.fullPath.join(" → ")}
            </span>
          ))}
          {selectedItems.length > 5 && (
            <span className="text-xs text-gray-500">
              +{selectedItems.length - 5} more...
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationSelector;
