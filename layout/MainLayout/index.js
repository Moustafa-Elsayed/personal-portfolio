import { memo, useEffect, useState } from "react";
// import { motion } from 'framer-motion'
// *** components ***
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { storeUserId } from "@/@redux/reducers/userSlice";
import WhatsappIcon from "@/components/pages/WhatsappIcon";

function MainLayout({ LayoutData, children }) {
  useEffect(() => {
    console.log("lastupdate");
  }, []);

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const generatedUUID = useSelector((state) => state.user.userId);

  const generateNewUUID = () => {
    if (!generatedUUID) {
      const newUUID = uuidv4();
      dispatch(storeUserId(newUUID));
    }
  };
  useEffect(() => {
    if (!generatedUUID) {
      generateNewUUID();
    }
  }, [generatedUUID]);
  return (
    <>
      {loading ? (
        <>Loading ...</>
      ) : (
        <>
          <Header data={LayoutData} />
          <main
            style={{
              marginTop: 0,
              minHeight: "calc(100vh - 64px - 100px)",
              padding: 0,
              overflow: "hidden", // for the animation
            }}
          >
            <WhatsappIcon data={LayoutData} />

            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{
                type: "tween",
                stiffness: 260,
                damping: 20,
              }}
            >
              {children}
            </motion.div>
          </main>
          <Footer data={LayoutData} />
        </>
      )}
    </>
  );
}

export default memo(MainLayout);
