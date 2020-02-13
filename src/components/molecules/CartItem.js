import React, {useState} from "react";
import { Card, Block, Text, Rating, Divider } from "_atoms";
import { Spacing } from "_styles";
import { Colors } from "_styles";
import { CircularButton } from "_molecules";
import { t } from "_i18n";
const CartItem = ({ item, navigation, showButtons }) => {
  const [quantity, setQuantity] = useState(item.quantity)
  const renderVariants = () => (
    <Block flex={false} row>
      {item.variant.map((item, index) => {
        return (
          <Text
            style={{
              marginTop: Spacing.BASE * 0.1
            }}
            weight={"400"}
            caption
            
            gray
          >
            {`${index === 0 ? "" : ` - `}${item}`}
          </Text>
        );
      })}
    </Block>
  );
  const renderPrice = () =>
    item.quantity === 1 ? (
      <Text weight={"400"} numberOfLines={4} caption>
        {item.price} $
      </Text>
    ) : (
      <Text weight={"400"} numberOfLines={4} caption>
        {item.price * item.quantity} $ <Text small>({item.price} $ Each)</Text>
      </Text>
    );
  const renderButtons = () => (
    <Block flex={false} row center padding={[Spacing.BASE * 0.5, 0]}>
      <CircularButton
        disabled={quantity<=0}
        onPress={() => setQuantity((quantity)=> quantity-1)}
        icon={"minus"}
        color={"black"}
        iconSize={Spacing.BASE * 0.5}
        buttonSize={Spacing.BASE * 0.6}
        bgColor={quantity<=0 ? Colors.GRAY_MEDIUM: Colors.PRIMARY}
      />
      <Text
        weight={"400"}
        style={{ paddingHorizontal: Spacing.PADDING_15 * 0.6 }}
      >
        {(quantity<=0)? 0 : quantity}
      </Text>
      <CircularButton
                onPress={() => setQuantity((quantity)=> quantity+1)}
        icon={"plus"}
        color={"black"}
        iconSize={Spacing.BASE * 0.5}
        buttonSize={Spacing.BASE * 0.6}
        bgColor={Colors.PRIMARY}
      />
    </Block>
  );
  return (
    <Card
      touchable
      horizontal
      shadow
      cover={{
        uri: item.image_url,
        style: {
          width: Spacing.BASE * 8,
          height: Spacing.BASE * 9.5
        }
      }}
      onPress={() => navigation.navigate("ProductDetails")}
    >
      <Block padding={[Spacing.BASE * 0.5, 0]}>
        <Text weight={"400"} numberOfLines={4} title>
          {item.title}{" "}
        </Text>
        {renderVariants()}
        <Text
          style={{
            paddingRight: Spacing.BASE * 0.5
          }}
          gray
          body
          caption
        >
          <Text caption weight={"400"}>{t('Cart.from')}: </Text>{t(`retailers.${item.retailer}`)}
        </Text>
        <Block middle >
        {renderPrice()}
        {showButtons &&renderButtons()}
        </Block>
      </Block>
    </Card>
  );
};

export default CartItem;
