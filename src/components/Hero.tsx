import { Button } from "@/components/ui/button";
import styles from "./Hero.module.css";
import quantoLogo from "/quanto-logo.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white to-quantoblue pt-24">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_60%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_60%)]"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 md:pr-8 mb-12 md:mb-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="mb-8">
            <img 
              src={quantoLogo}
              alt="QuantoBooks Logo" 
              className="h-12 w-auto"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-quantoblue-dark leading-tight mb-6">
            Accounting Powered by <span className="text-quantoblue">AI Intelligence</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            QuantoBooks combines artificial intelligence with accounting expertise to automate your finances, uncover insights, and save you time and money.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-quantoblue hover:bg-quantoblue-dark text-white text-lg px-8 py-6 rounded-lg">
              Get Started Free
            </Button>
            <Button variant="outline" className="border-quantogrey-dark text-quantoblue hover:bg-quantogrey hover:text-quantoblue-dark text-lg px-8 py-6 rounded-lg">
              Schedule Demo
            </Button>
          </div>
        </div>

        {/* Checkout Card */}
        <div className="md:w-1/2 relative animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className={styles.parent}>
            <div className={`${styles.card} ${styles.cart}`}>
              <label className={styles.title}>ACCOUNTING DASHBOARD</label>
              <div className={styles.steps}>
                <div className={styles.step}>
                  <div>
                    <span>BUSINESS ADDRESS</span>
                    <p>111 Peter Street</p>
                    <p>Toronto, Ontario, Canada</p>
                  </div>
                  <hr />
                  <div>
                    <span>PAYMENT METHOD</span>
                    <p>Business Account</p>
                    <p>**** **** **** 4243</p>
                  </div>
                  <hr />
                  <div className={styles.promo}>
                    <span>HAVE A PROMO CODE?</span>
                    <form className={styles.form}>
                      <input type="text" placeholder="Enter a Promo Code" className={styles.input_field} />
                      <button>Apply</button>
                    </form>
                  </div>
                  <hr />
                  <div className={styles.payments}>
                    <span>QUARTERLY SUBSCRIPTION</span>
                    <div className={styles.details}>
                      <span>Base Price:</span>
                      <span>$240.00</span>
                      <span>Processing Fee:</span>
                      <span>$10.00</span>
                      <span>HST (13%):</span>
                      <span>$32.50</span>
                    </div>
                  </div>
                  <hr />
                  <div className={styles.footer}>
                    <label className={styles.price}>$282.50</label>
                    <button className={styles.checkout_btn}>Subscribe Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
