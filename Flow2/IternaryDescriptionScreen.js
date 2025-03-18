import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions, SafeAreaView, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.7;
const SPACING = 10;
const VISIBLE_CARDS = width * 0.15;

// Trip Day Card Component
const TripDayCard = ({ day, title, images, scale, onPressView }) => {
    return (
      <View style={[styles.dayCard, { transform: [{ scale }] }]}>
        <Text style={styles.dayTitle}>{`Day ${day}: ${title}`}</Text>
        <View style={styles.imageGrid}>
          {images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.gridImage} />
          ))}
        </View>
        <View style={styles.cardFooter}>
          <TouchableOpacity onPress={onPressView}>
            <Text style={styles.viewText}>View</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

// Testimonial Card Component
const TestimonialCard = ({ name, image, rating, text, scale }) => {
  return (
    <View style={[styles.testimonialCard, { transform: [{ scale }] }]}>
      <View style={styles.testimonialHeader}>
        <Image source={{ uri: image }} style={styles.avatar} />
        <View style={styles.testimonialInfo}>
          <Text style={styles.testimonialName}>{name}</Text>
          <View style={styles.ratingContainer}>
            {[...Array(5)].map((_, i) => (
              <AntDesign 
                key={i} 
                name="star" 
                size={16} 
                color={i < rating ? "#FFD700" : "#D3D3D3"} 
              />
            ))}
          </View>
        </View>
      </View>
      <Text style={styles.testimonialText} numberOfLines={3}>{text}</Text>
    </View>
  );
};

// Main Trip Screen Component
const IternaryDescriptionScreen = ({navigation}) => {
  // Sample data
  const tripDays = [
    {
      day: 1,
      title: 'Arrival and history',
      images: [
        'https://i.pinimg.com/474x/e7/e9/d2/e7e9d2fb5672a91064a64a648cb646e2.jpg',
        'https://i.pinimg.com/474x/3b/44/09/3b44099f46c4a015ebaeea1133828b9b.jpg',
        'https://i.pinimg.com/474x/a8/63/dc/a863dc206b3f4daa99051227e6c9f459.jpg',
        'https://i.pinimg.com/474x/46/33/8c/46338c3ab4f1b4dcddcddb61ee790e29.jpg'
      ]
    },
    {
      day: 2,
      title: 'Culture',
      images: [
        'https://i.pinimg.com/474x/3e/be/ed/3ebeedce28164918c76108cd9f5e465a.jpg',
        'https://i.pinimg.com/474x/a3/63/70/a3637037847131084d61ec17e0f599fe.jpg',
        'https://i.pinimg.com/474x/4a/33/df/4a33df859fa89f2e5d97ff40ca4e18f4.jpg',
        'https://i.pinimg.com/474x/94/ad/9f/94ad9fb1ab2651d51a1b7d44aaa0ba8e.jpg'
      ]
    },
    {
      day: 3,
      title: 'Nature',
      images: [
        'https://i.pinimg.com/474x/6c/31/2d/6c312d696028eff78f44d2a2ea3cde5e.jpg',
        'https://i.pinimg.com/474x/6c/31/2d/6c312d696028eff78f44d2a2ea3cde5e.jpg',
        'https://i.pinimg.com/474x/4b/9b/7b/4b9b7b5d62517f718382b89a32a0a741.jpg',
        'https://i.pinimg.com/474x/c4/8c/f3/c48cf350d79e91ad2669c37e1205b02a.jpg'
      ]
    }
  ];

  const testimonials = [
    {
      id: '1',
      name: 'Akshit Agrawal',
      image: 'https://i.pinimg.com/474x/5e/f7/64/5ef76484a835d0ad522dc3d4f4fb0989.jpg',
      rating: 4,
      text: 'Modern Seoul is a thriving metropolis packed with bustling streets, towering skyscrapers and cutting-edge fashion styles. The historic palaces provided an amazing contrast to the urban landscape.'
    },
    {
      id: '2',
      name: 'Jane Smith',
      image: 'https://i.pinimg.com/474x/5e/f7/64/5ef76484a835d0ad522dc3d4f4fb0989.jpg',
      rating: 5,
      text: 'The blend of historic temples and futuristic architecture made this trip unforgettable! The local cuisine was incredible and the tour guides were extremely knowledgeable.'
    },
    {
      id: '3',
      name: 'David Wilson',
      image: 'https://i.pinimg.com/474x/5e/f7/64/5ef76484a835d0ad522dc3d4f4fb0989.jpg',
      rating: 5,
      text: 'Seoul exceeded all my expectations. The efficient transportation system made it easy to explore all the main attractions. The night markets were a highlight of the trip!'
    }
  ];

  // State to track active indices and scroll positions
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [testimonialScrollX, setTestimonialScrollX] = useState(0);
  
  const daysRef = useRef();
  const testimonialRef = useRef();

  // Function to calculate scale based on position in carousel
  const getItemScale = (index, scrollPosition, itemWidth) => {
    const center = width / 2;
    const position = -scrollPosition + index * itemWidth + itemWidth / 2;
    const distance = Math.abs(center - position);
    
    // Scale between 1 (center) and 0.8 (edges)
    return Math.max(0.8, 1 - (distance / width) * 0.4);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Trip Days Carousel */}
        <View style={styles.sectionContainer}>
          <FlatList
            ref={daysRef}
            data={tripDays}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carouselContent}
            snapToInterval={CARD_WIDTH + SPACING}
            decelerationRate="fast"
            onScroll={(e) => {
              const newScrollX = e.nativeEvent.contentOffset.x;
              setScrollX(newScrollX);
              setActiveDayIndex(Math.round(newScrollX / (CARD_WIDTH + SPACING)));
            }}
            renderItem={({item, index}) => {
              const scale = getItemScale(index, scrollX, CARD_WIDTH + SPACING);
              return (
                <View style={{width: CARD_WIDTH, marginHorizontal: SPACING / 2}}>
                  <TripDayCard 
                    day={item.day}
                    title={item.title}
                    images={item.images}
                    scale={scale}
                  />
                </View>
              );
            }}
            keyExtractor={(item) => `day-${item.day}`}
            ItemSeparatorComponent={() => <View style={{width: SPACING}} />}
            snapToAlignment="center"
            initialScrollIndex={0}
            getItemLayout={(data, index) => ({
              length: CARD_WIDTH + SPACING,
              offset: (CARD_WIDTH + SPACING) * index,
              index,
            })}
          />
          
          {/* Indicator dots */}
          <View style={styles.indicatorContainer}>
            {tripDays.map((_, index) => (
              <View
                key={`indicator-${index}`}
                style={[
                  styles.indicator,
                  activeDayIndex === index && styles.activeIndicator
                ]}
              />
            ))}
          </View>
        </View>

        {/* Trip Description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            Explore the vibrant blend of history, culture, and modernity 
            in Seoul with a 5-day itinerary featuring iconic palaces, 
            bustling markets, trendy shopping districts, and serene 
            nature spots. From Gyeongbokgung Palace to N Seoul 
            Tower and Han River cruises, this trip offers something for 
            everyone!
          </Text>
          <View style={styles.tripDetailsStacked}>
            <Text style={styles.detailText}>Duration: 5 days</Text>
            <Text style={styles.detailText}>Price: Rs. 40,000</Text>
          </View>
        </View>

        {/* Testimonials */}
        <View style={styles.testimonialSection}>
          <Text style={styles.sectionTitle}>Testimonial</Text>
          <FlatList
            ref={testimonialRef}
            data={testimonials}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carouselContent}
            snapToInterval={CARD_WIDTH + SPACING}
            decelerationRate="fast"
            onScroll={(e) => {
              setTestimonialScrollX(e.nativeEvent.contentOffset.x);
            }}
            renderItem={({item, index}) => {
              const scale = getItemScale(index, testimonialScrollX, CARD_WIDTH + SPACING);
              return (
                <View style={{width: CARD_WIDTH, marginHorizontal: SPACING / 2}}>
                  <TestimonialCard 
                    name={item.name}
                    image={item.image}
                    rating={item.rating}
                    text={item.text}
                    scale={scale}
                  />
                </View>
              );
            }}
            keyExtractor={(item) => `testimonial-${item.id}`}
            ItemSeparatorComponent={() => <View style={{width: SPACING}} />}
            snapToAlignment="center"
          />
          
          {/* Indicator dots for testimonials */}
          <View style={styles.indicatorContainer}>
            {testimonials.map((_, index) => (
              <View
                key={`testimonial-indicator-${index}`}
                style={[
                  styles.indicator,
                  Math.round(testimonialScrollX / (CARD_WIDTH + SPACING)) === index && styles.activeIndicator
                ]}
              />
            ))}
          </View>
        </View>
        
        {/* Add some bottom padding for the fixed button */}
        <View style={styles.bottomPadding} />
      </ScrollView>

      {/* Book Now Button */}
      <TouchableOpacity style={styles.bookButton} onPress={() => navigation.navigate('BookTrip')}>
        <Text style={styles.bookButtonText}>Book Now</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  sectionContainer: {
    marginVertical: 12,
  },
  carouselContent: {
    paddingHorizontal: width * 0.15 - SPACING / 2,
    paddingVertical: 15,
  },
  dayCard: {
    width: CARD_WIDTH,
    aspectRatio: 0.95,
    backgroundColor: '#FFEBB5',
    borderRadius: 15,
    padding: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  dayTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  imageGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridImage: {
    width: '48%',
    height: '48%',
    borderRadius: 8,
    marginBottom: 4,
  },
  cardFooter: {
    alignItems: 'center',
    marginTop: 5,
  },
  viewText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'right',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#ffffff', // Optional background for visibility
    borderRadius: 8,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  indicator: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#ddd',
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: '#FFD56B',
    width: 16,
  },
  descriptionContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    marginHorizontal: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#444',
  },
  tripDetailsStacked: {
    marginTop: 12,
  },
  detailText: {
    fontSize: 15,
    fontWeight: '500',
    marginVertical: 3,
    color: '#333',
  },
  testimonialSection: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
  },
  testimonialCard: {
    width: CARD_WIDTH,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    minHeight: 150,
  },
  testimonialHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 23,
  },
  testimonialInfo: {
    marginLeft: 10,
    flex: 1,
  },
  testimonialName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  testimonialText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  bookButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#FFD56B',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  bookButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  bottomPadding: {
    height: 80,
  },
});

export default IternaryDescriptionScreen;
