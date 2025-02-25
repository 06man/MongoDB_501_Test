db.by_road_type.find(
    { county: '강릉시' },
    { '교차로내.accident_count': 1 }
)

db.by_road_type.find(
    { '기타단일로.death_toll': 0 },
    { city_or_province: 1, county: 1 }
)