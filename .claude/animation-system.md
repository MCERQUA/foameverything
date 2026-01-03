# FOAM EVERYTHING - HYPER-MODERN ANIMATION SYSTEM

## CRITICAL DESIGN PHILOSOPHY

> **THIS IS NOT A REGULAR WEBSITE.**
> Every component must EXPLODE TO LIFE. Every interaction must feel magical.
> We are showcasing what modern web design CAN BE, not what it typically is.
> If an animation feels "normal" or "expected", it's WRONG. Push harder.

---

## CORE ANIMATION LIBRARIES

### 1. GSAP (GreenSock Animation Platform)
**Use for:** Complex timelines, scroll-based animations, physics, morphing, path animations
```bash
npm install gsap @gsap/react
```

**Required Plugins:**
- `ScrollTrigger` - Scroll-based animations
- `SplitText` - Letter-by-letter text animations (REQUIRED FOR ALL HEADINGS)
- `MorphSVG` - Shape morphing
- `Physics2D` - Realistic physics
- `CustomEase` - Custom easing curves

### 2. Motion.dev (Framer Motion)
**Use for:** React component animations, gesture interactions, layout animations, shared element transitions
```bash
npm install motion
```

---

## MANDATORY ANIMATION RULES

### RULE 1: ALL HEADINGS MUST HAVE LETTER-BY-LETTER ANIMATIONS

**NEVER** do this:
```jsx
// WRONG - Boring fade in
<motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
  Vegas 2026
</motion.h1>
```

**ALWAYS** do this:
```jsx
// CORRECT - Each letter animates individually
const headingText = "Vegas 2026";

<h1>
  {headingText.split('').map((letter, i) => (
    <motion.span
      key={i}
      initial={{
        opacity: 0,
        y: 100,
        rotateX: -90,
        filter: 'blur(10px)'
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: 'blur(0px)'
      }}
      transition={{
        delay: i * 0.05,
        type: 'spring',
        damping: 12,
        stiffness: 200
      }}
      style={{ display: 'inline-block' }}
    >
      {letter === ' ' ? '\u00A0' : letter}
    </motion.span>
  ))}
</h1>
```

### RULE 2: EVERY SCROLL REVEAL MUST BE UNIQUE

Each section should have a DIFFERENT reveal animation:

**Section 1:** Letters rain down from above with blur
**Section 2:** Text assembles from scattered positions
**Section 3:** Letters flip in 3D one by one
**Section 4:** Glitch/digital corruption reveal
**Section 5:** Liquid morph from shapes to text
**Section 6:** Typewriter with cursor + glitch
**Section 7:** Letters zoom from infinity
**Section 8:** Magnetic pull from edges

### RULE 3: COMPONENTS MUST REACT TO CURSOR

```jsx
// Magnetic button effect
const MagneticButton = ({ children }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) * 0.3;
    const y = (clientY - top - height / 2) * 0.3;

    gsap.to(ref.current, {
      x, y,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = () => {
    gsap.to(ref.current, {
      x: 0, y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)'
    });
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};
```

### RULE 4: SCROLL VELOCITY AFFECTS ANIMATIONS

```jsx
// Elements stretch/skew based on scroll speed
useEffect(() => {
  let lastScroll = 0;
  let velocity = 0;

  const handleScroll = () => {
    velocity = window.scrollY - lastScroll;
    lastScroll = window.scrollY;

    gsap.to('.velocity-element', {
      skewY: velocity * 0.1,
      duration: 0.3
    });
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

---

## HEADING ANIMATION VARIANTS

### Variant 1: Cascade Rain
```jsx
// Letters fall from above with stagger
const CascadeHeading = ({ text }) => {
  return (
    <h2 className="overflow-hidden">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: -200, opacity: 0, rotateZ: Math.random() * 30 - 15 }}
          whileInView={{ y: 0, opacity: 1, rotateZ: 0 }}
          transition={{
            delay: i * 0.04,
            type: 'spring',
            damping: 15,
            stiffness: 300
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </h2>
  );
};
```

### Variant 2: Chaos Assembly
```jsx
// Letters start scattered, assemble into position
const ChaosHeading = ({ text }) => {
  return (
    <h2>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{
            x: Math.random() * 400 - 200,
            y: Math.random() * 400 - 200,
            rotate: Math.random() * 360,
            scale: 0,
            opacity: 0
          }}
          whileInView={{
            x: 0, y: 0, rotate: 0, scale: 1, opacity: 1
          }}
          transition={{
            delay: i * 0.03,
            type: 'spring',
            damping: 20,
            stiffness: 150
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </h2>
  );
};
```

### Variant 3: 3D Flip Reveal
```jsx
// Letters flip in from behind
const FlipHeading = ({ text }) => {
  return (
    <h2 style={{ perspective: '1000px' }}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ rotateY: -90, opacity: 0 }}
          whileInView={{ rotateY: 0, opacity: 1 }}
          transition={{
            delay: i * 0.05,
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{
            display: 'inline-block',
            transformStyle: 'preserve-3d'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </h2>
  );
};
```

### Variant 4: Glitch Reveal
```jsx
// Digital glitch effect
const GlitchHeading = ({ text }) => {
  return (
    <h2 className="relative">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: i * 0.02 }}
          className="inline-block relative"
        >
          <motion.span
            animate={{
              x: [0, -2, 2, -1, 1, 0],
              textShadow: [
                '0 0 0 transparent',
                '-2px 0 #ff0040, 2px 0 #00ffff',
                '2px 0 #ff0040, -2px 0 #00ffff',
                '0 0 0 transparent'
              ]
            }}
            transition={{
              delay: i * 0.02,
              duration: 0.3,
              times: [0, 0.2, 0.4, 0.6, 0.8, 1]
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </motion.span>
      ))}
    </h2>
  );
};
```

### Variant 5: Wave Motion
```jsx
// Letters wave up in sequence
const WaveHeading = ({ text }) => {
  return (
    <h2>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: i * 0.05,
            type: 'spring',
            damping: 10,
            stiffness: 400
          }}
          whileHover={{
            y: -10,
            color: '#00ffff',
            textShadow: '0 0 20px #00ffff'
          }}
          className="inline-block cursor-default"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </h2>
  );
};
```

### Variant 6: Zoom From Infinity
```jsx
// Letters zoom in from far away
const ZoomHeading = ({ text }) => {
  return (
    <h2 style={{ perspective: '1000px' }}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{
            z: -1000,
            opacity: 0,
            scale: 5,
            filter: 'blur(20px)'
          }}
          whileInView={{
            z: 0,
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)'
          }}
          transition={{
            delay: i * 0.06,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </h2>
  );
};
```

### Variant 7: Typewriter + Glitch
```jsx
// Classic typewriter with modern glitch
const TypewriterHeading = ({ text }) => {
  const [displayedChars, setDisplayedChars] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (isInView && displayedChars < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedChars(prev => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [isInView, displayedChars, text.length]);

  return (
    <motion.h2
      onViewportEnter={() => setIsInView(true)}
      className="font-mono"
    >
      {text.slice(0, displayedChars)}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.5 }}
        className="text-neon-cyan"
      >
        |
      </motion.span>
    </motion.h2>
  );
};
```

### Variant 8: Neon Flicker
```jsx
// Neon sign flicker effect
const NeonHeading = ({ text }) => {
  return (
    <h2>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: i * 0.05 }}
          animate={{
            textShadow: [
              '0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #00ffff, 0 0 80px #00ffff',
              '0 0 4px #fff, 0 0 10px #fff, 0 0 18px #fff, 0 0 38px #00ffff, 0 0 73px #00ffff',
              '0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #00ffff, 0 0 80px #00ffff',
            ]
          }}
          className="inline-block"
          style={{
            color: '#fff',
            animationDelay: `${Math.random() * 2}s`
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </h2>
  );
};
```

---

## SCROLL-TRIGGERED SECTION ANIMATIONS

### Horizontal Scroll Section
```jsx
// Section that scrolls horizontally as you scroll down
const HorizontalSection = ({ children }) => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollContent = scrollRef.current;

    gsap.to(scrollContent, {
      x: () => -(scrollContent.scrollWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => `+=${scrollContent.scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1
      }
    });
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden">
      <div ref={scrollRef} className="flex">
        {children}
      </div>
    </div>
  );
};
```

### Parallax Depth Layers
```jsx
// Multiple layers moving at different speeds
const ParallaxSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-layer-1"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
      />
      <motion.div
        className="absolute inset-0 bg-layer-2"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
      />
      <motion.div
        className="absolute inset-0 bg-layer-3"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
      />
    </div>
  );
};
```

### Split Screen Reveal
```jsx
// Content reveals through splitting panels
const SplitReveal = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-black z-10 origin-left"
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="absolute inset-0 bg-neon-red z-10 origin-right"
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      />
      {children}
    </div>
  );
};
```

### Stagger Grid Reveal
```jsx
// Grid items stagger in with 3D rotation
const StaggerGrid = ({ items }) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      rotateX: -15,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      className="grid grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {items.map((item, i) => (
        <motion.div key={i} variants={itemVariants}>
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
};
```

---

## INTERACTIVE EFFECTS

### Glow Follow Cursor
```jsx
// Glow effect follows cursor within element
const GlowCard = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden"
      style={{
        background: `radial-gradient(
          600px circle at ${position.x}px ${position.y}px,
          rgba(0, 255, 255, 0.15),
          transparent 40%
        )`
      }}
    >
      {children}
    </div>
  );
};
```

### 3D Card Tilt
```jsx
// Card tilts based on mouse position
const TiltCard = ({ children }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    gsap.to(ref.current, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      duration: 0.3
    });
  };

  const handleMouseLeave = () => {
    gsap.to(ref.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)'
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};
```

### Particle Explosion on Click
```jsx
// Particles explode from click point
const ParticleButton = ({ children, onClick }) => {
  const createParticles = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = x + 'px';
      particle.style.top = y + 'px';
      e.currentTarget.appendChild(particle);

      gsap.to(particle, {
        x: (Math.random() - 0.5) * 200,
        y: (Math.random() - 0.5) * 200,
        opacity: 0,
        scale: 0,
        duration: 0.8,
        ease: 'power2.out',
        onComplete: () => particle.remove()
      });
    }

    onClick?.();
  };

  return (
    <button onClick={createParticles} className="relative overflow-visible">
      {children}
    </button>
  );
};
```

---

## PRODUCT CARD ANIMATIONS

### Hover Reveal Layers
```jsx
const ProductCard = ({ product }) => {
  return (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Glow layer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-pink/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl"
        transition={{ duration: 0.3 }}
      />

      {/* Border glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        initial={{ opacity: 0 }}
        whileHover={{
          opacity: 1,
          boxShadow: '0 0 30px rgba(0, 255, 255, 0.5), inset 0 0 30px rgba(0, 255, 255, 0.1)'
        }}
      />

      {/* Image with zoom */}
      <motion.div className="overflow-hidden rounded-2xl">
        <motion.img
          src={product.image}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>

      {/* Content slides up */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black"
      >
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </motion.div>
    </motion.div>
  );
};
```

---

## PAGE TRANSITION ANIMATIONS

```jsx
// Wrap pages with this for transitions
const PageTransition = ({ children }) => {
  return (
    <>
      {/* Transition overlay */}
      <motion.div
        className="fixed inset-0 bg-neon-red z-50"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        style={{ originY: 'bottom' }}
      />
      <motion.div
        className="fixed inset-0 bg-black z-50"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        style={{ originY: 'top' }}
      />

      {/* Page content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
};
```

---

## LOADING ANIMATIONS

### Logo Reveal
```jsx
const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo draws itself */}
      <motion.svg>
        <motion.path
          d="..."
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          stroke="#00ffff"
          strokeWidth={2}
          fill="transparent"
        />
      </motion.svg>

      {/* Percentage counter */}
      <motion.span
        className="text-neon-cyan text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Counter from={0} to={100} duration={2} />%
      </motion.span>
    </motion.div>
  );
};
```

---

## COUNTDOWN TIMER ANIMATION

```jsx
// Vegas 2026 countdown with flip animation
const CountdownDigit = ({ value }) => {
  return (
    <div className="relative h-20 w-16 perspective-1000">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={value}
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: 90, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="absolute inset-0 flex items-center justify-center bg-black border-2 border-neon-red text-5xl font-bold text-white shadow-glow-red"
        >
          {value}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
```

---

---

## CUTTING-EDGE TECHNIQUES (FROM 2025 RESEARCH)

### 3D Cylinder Text Effect
Letters appear to rotate on an invisible cylinder by changing transform-origin:
```jsx
const CylinderText = ({ text }) => {
  return (
    <h2 style={{ perspective: '1000px' }}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ rotateX: 90, opacity: 0 }}
          whileInView={{ rotateX: 0, opacity: 1 }}
          transition={{
            delay: i * 0.05,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{
            display: 'inline-block',
            transformOrigin: 'center center -50px', // Behind the letter in 3D space
            transformStyle: 'preserve-3d'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </h2>
  );
};
```

### Scroll Velocity Skew
Elements stretch based on how fast you're scrolling:
```jsx
const VelocitySkew = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateSkew = () => {
      const velocity = window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;

      gsap.to(ref.current, {
        skewY: Math.min(Math.max(velocity * 0.05, -5), 5),
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    gsap.ticker.add(updateSkew);
    return () => gsap.ticker.remove(updateSkew);
  }, []);

  return <div ref={ref}>{children}</div>;
};
```

### Scrub with Smoothing
Link animation progress directly to scroll with smooth catchup:
```jsx
useEffect(() => {
  gsap.to('.hero-content', {
    y: -200,
    opacity: 0,
    scale: 0.8,
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5, // 1.5 second smooth catchup
    }
  });
}, []);
```

### Snap to Sections
Auto-snap to predefined scroll positions:
```jsx
useEffect(() => {
  ScrollTrigger.create({
    snap: {
      snapTo: 1 / (sections.length - 1), // Snap to each section
      duration: { min: 0.2, max: 0.6 },
      delay: 0.1,
      ease: 'power2.inOut',
      inertia: false // Disable velocity-based duration
    }
  });
}, []);
```

### Layered Zoom Parallax
Multiple layers zoom at different rates:
```jsx
const LayeredZoom = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const layers = gsap.utils.toArray('.zoom-layer');

    layers.forEach((layer, i) => {
      gsap.to(layer, {
        scale: 1 + (layers.length - i) * 0.5,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <div className="zoom-layer absolute inset-0 z-10">Layer 1</div>
      <div className="zoom-layer absolute inset-0 z-20">Layer 2</div>
      <div className="zoom-layer absolute inset-0 z-30">Layer 3</div>
    </div>
  );
};
```

### Text Mask Reveal
Characters slide up from behind a mask:
```jsx
const MaskReveal = ({ text }) => {
  return (
    <h2>
      {text.split(' ').map((word, wi) => (
        <span key={wi} className="inline-block overflow-hidden mr-2">
          {word.split('').map((char, ci) => (
            <motion.span
              key={ci}
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={{
                delay: wi * 0.1 + ci * 0.03,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </h2>
  );
};
```

### Cursor Spotlight Effect
Radial gradient follows cursor across element:
```jsx
const SpotlightCard = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-foam-charcoal rounded-3xl"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 255, 255, 0.1), transparent 40%)`
        }}
      />
      {children}
    </div>
  );
};
```

### Horizontal Scroll Section
Content scrolls horizontally as you scroll vertically:
```jsx
const HorizontalScroll = ({ children }) => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollContent = scrollRef.current;
    const scrollWidth = scrollContent.scrollWidth - window.innerWidth;

    gsap.to(scrollContent, {
      x: -scrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });
  }, []);

  return (
    <section ref={containerRef} className="overflow-hidden">
      <div ref={scrollRef} className="flex w-max">
        {children}
      </div>
    </section>
  );
};
```

### Morphing SVG Shapes
Shapes morph between states on scroll:
```jsx
useEffect(() => {
  gsap.to('#shape1', {
    morphSVG: '#shape2',
    scrollTrigger: {
      trigger: '.morph-section',
      start: 'top center',
      end: 'bottom center',
      scrub: true
    }
  });
}, []);
```

---

## AWWWARDS-LEVEL TECHNIQUES

Based on 2025 Site of the Day winners:

### 1. Split-Screen Wipe Reveal
```jsx
const SplitWipe = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-1/2 h-full bg-neon-red z-20"
        initial={{ x: 0 }}
        whileInView={{ x: '-100%' }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full bg-neon-cyan z-20"
        initial={{ x: 0 }}
        whileInView={{ x: '100%' }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      />
      {children}
    </div>
  );
};
```

### 2. Staggered Grid with Depth
```jsx
const DepthGrid = ({ items }) => {
  return (
    <motion.div
      className="grid grid-cols-3 gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.15 } }
      }}
    >
      {items.map((item, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: {
              opacity: 0,
              y: 100,
              z: -100,
              rotateX: 45
            },
            visible: {
              opacity: 1,
              y: 0,
              z: 0,
              rotateX: 0,
              transition: {
                type: 'spring',
                damping: 20,
                stiffness: 100
              }
            }
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
};
```

### 3. Text Scramble Effect
```jsx
const ScrambleText = ({ text, duration = 2 }) => {
  const [displayed, setDisplayed] = useState(text.replace(/./g, '#'));
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

  useEffect(() => {
    let frame = 0;
    const totalFrames = duration * 60;

    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      const newText = text.split('').map((char, i) => {
        if (char === ' ') return ' ';
        if (progress * text.length > i) return char;
        return chars[Math.floor(Math.random() * chars.length)];
      }).join('');

      setDisplayed(newText);

      if (frame >= totalFrames) clearInterval(interval);
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [text, duration]);

  return <span className="font-mono">{displayed}</span>;
};
```

---

## QUALITY CHECKLIST

Before committing ANY component, verify:

- [ ] Headings use letter-by-letter animation (NOT whole-element fade)
- [ ] Buttons have magnetic/hover effects
- [ ] Cards have 3D tilt on hover
- [ ] Scroll reveals are unique per section
- [ ] Glow effects pulse/animate
- [ ] Page transitions are smooth
- [ ] Loading states are animated
- [ ] Hover states feel "alive"
- [ ] Nothing feels "static"

---

## WARNING: ANIMATION DEGRADATION

**DO NOT** simplify animations during bug fixes or updates.
**DO NOT** replace letter animations with component animations.
**DO NOT** remove hover effects to "simplify" code.
**DO NOT** use basic fade-in when a spectacular reveal exists.

If you find yourself writing `opacity: 0 -> 1` for a heading, STOP.
Go back and implement proper letter-by-letter animation.

**THE ANIMATION QUALITY IS THE PRODUCT.**
